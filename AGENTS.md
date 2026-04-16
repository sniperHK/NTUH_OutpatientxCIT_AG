# 全域指引載入（Codex CLI）

每次啟動 Codex CLI 或開始新 session 時，請在做任何工作前先讀取並遵循這些檔案：

- `/Users/sniperhk/.global-ai-instructions.md`
- `.shared-ai-context.md`

將全域指引視為本機的系統層規則；若無法讀取該檔案，請先請使用者貼上內容再繼續。

## JavaScript REPL (Node)

- Use `js_repl` for Node-backed JavaScript with top-level await in a persistent kernel.
- `js_repl` is a freeform/custom tool. Direct `js_repl` calls must send raw JavaScript tool input (optionally with first-line `// codex-js-repl: timeout_ms=15000`). Do not wrap code in JSON, quotes, or markdown code fences.
- Helpers: `codex.cwd`, `codex.homeDir`, `codex.tmpDir`, `codex.tool(name, args?)`, and `codex.emitImage(imageLike)`.
- `codex.tool` executes a normal tool call and resolves to the raw tool output object.
- `codex.emitImage(...)` adds one image to the outer `js_repl` output each time you call it.
- Imported local files must be ESM `.js` or `.mjs` files; prefer dynamic imports with `await import(...)`.
- Avoid direct access to `process.stdout`, `process.stderr`, and `process.stdin`; use `console.log`, `codex.tool(...)`, and `codex.emitImage(...)`.
