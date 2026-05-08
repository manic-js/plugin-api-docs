# `@manicjs/api-docs`

Official Manic plugin for interactive API documentation with Scalar.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Plugin docs: [manicjs.tech/docs/framework/plugins/api-docs](https://www.manicjs.tech/docs/framework/plugins/api-docs)

## Install

```bash
bun add @manicjs/api-docs
```

## Usage

```ts
import { defineConfig } from "manicjs/config";
import { apiDocs } from "@manicjs/api-docs";

export default defineConfig({
  plugins: [apiDocs()],
});
```

## License

GPL-3.0
