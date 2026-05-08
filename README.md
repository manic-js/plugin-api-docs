<img src="https://raw.githubusercontent.com/Rahuletto/manic/main/demo/assets/wordmark.svg" alt="Manic" width="300" />

[![npm version](https://img.shields.io/npm/v/%40manicjs%2Fapi-docs?logo=npm)](https://www.npmjs.com/package/@manicjs/api-docs)
[![Bun](https://img.shields.io/badge/runtime-Bun-black?logo=bun)](https://bun.sh)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue)](https://opensource.org/licenses/GPL-3.0)


Official Manic plugin for interactive API documentation with Scalar.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Docs: [manicjs.tech/docs](https://www.manicjs.tech/docs)
- Package docs: [https://www.manicjs.tech/docs/framework/plugins/api-docs](https://www.manicjs.tech/docs/framework/plugins/api-docs)

## Install

```bash
bun add @manicjs/api-docs
```

## Usage

```ts
import { defineConfig } from 'manicjs/config';
import { apiDocs } from '@manicjs/api-docs';

export default defineConfig({
  plugins: [apiDocs()],
});
```

## License

GPL-3.0
