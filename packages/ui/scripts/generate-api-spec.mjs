#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');
const sdkRoot = path.resolve(packageRoot, '../sdk');
const sdkTypes = path.join(sdkRoot, 'lib/types/index.d.ts');
const tempOutDir = path.join(packageRoot, '.api-spec-tmp');
const finalSpec = path.join(packageRoot, 'API-SPEC.md');
const typedocConfig = path.join(packageRoot, 'typedoc.markdown.json');
const entryPoint = 'src/library.ts';

function run(command, args, cwd) {
    execFileSync(command, args, {
        cwd,
        stdio: 'inherit',
        env: process.env
    });
}

function ensureSdkTypes() {
    if (fs.existsSync(sdkTypes)) {
        return;
    }

    run('pnpm', ['build'], sdkRoot);
}

function generateMarkdown() {
    fs.rmSync(tempOutDir, { recursive: true, force: true });
    run('pnpm', ['exec', 'typedoc', '--options', typedocConfig, entryPoint], packageRoot);

    const generatedSpec = path.join(tempOutDir, 'API-SPEC.md');
    if (!fs.existsSync(generatedSpec)) {
        throw new Error(`Expected generated file at ${generatedSpec}`);
    }

    fs.copyFileSync(generatedSpec, finalSpec);
}

try {
    ensureSdkTypes();
    generateMarkdown();
    process.stdout.write(`Generated ${path.relative(packageRoot, finalSpec)} using typedoc-plugin-markdown.\n`);
} finally {
    fs.rmSync(tempOutDir, { recursive: true, force: true });
}
