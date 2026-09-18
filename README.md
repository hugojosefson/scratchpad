# scratchpad

I use this repo to try out things like CI configurations that I need to do on
the `main` branch to make sense.

<!-- deno-fmt-ignore-start -->
<!-- hj:readme jsr-package:badges 19771db7fc04a18b96f85df5e3a5429b2bbdf403218e6362568639256197b7ff -->

[![JSR Version](https://jsr.io/badges/@hugojosefson/scratchpad)](https://jsr.io/@hugojosefson/scratchpad) [![JSR Score](https://jsr.io/badges/@hugojosefson/scratchpad/score)](https://jsr.io/@hugojosefson/scratchpad) <!-- /hj:readme -->
<!-- deno-fmt-ignore-end -->

<!-- hj:readme readme:requirements e1f2ae9f7a1c0adc42b0ff5d2c26aaf5de63e859105fd2346557eca53f16a211 -->

## Requirements

Requires [Deno](https://deno.com/).

<!-- /hj:readme -->

<!-- hj:readme deno-lib:api 4320ab53a0fd795f8715e21da09341b6af3c330e6afd0bfb888f60ee316cb47b -->

## API

See the API documentation on
[jsr.io/@hugojosefson/scratchpad](https://jsr.io/@hugojosefson/scratchpad).

<!-- /hj:readme -->
<!-- hj:readme jsr-package:installation 946fe65939e68fba0d0b02371e4d8aeabd0929847990de538e20b2c2ff248576 -->

## Installation

Add the package as a dependency:

```sh
deno add jsr:@hugojosefson/scratchpad
```

<!-- /hj:readme -->

<!-- hj:readme deno-lib:example 9f7e01272386cce1441ff1ae96a90e078b49fef6888bfa09765da3da8a3d20ef -->

## Example usage

```typescript
import { placeholder } from "@hugojosefson/scratchpad";

const result = placeholder();
console.dir({ result });
```

Run this example without cloning the repository:

```sh
deno run --reload jsr:@hugojosefson/scratchpad/example-usage
```

From a checkout, run the same example:

```sh
deno run readme/example-usage.ts
```

For more examples, see the tests:

[test/lib_test.ts](./test/lib_test.ts)

<!-- /hj:readme -->

## License

[MIT](./LICENSE)
