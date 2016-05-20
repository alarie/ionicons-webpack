# ionicons-webpack

Pretty shameless copy of [gowravshekar/font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack).



## Usage

1. Define loaders as described in the link above
2. Import it in your JS code:

```
// loads complete ionicons styles
@import 'ionicons-webpack'

// loads your custom configuration
@import 'ionicons-webpack!./path/to/ionicons.config.js'

// or as entry point in your webpack config:
module.exports = {
  entry: [
    "ionicons-webpack!./path/to/ionicons.config.js",
    "your-existing-entry-point"
  ]
};
```

**Note**: If you provide your own config via the `!./path/to/ionicons.config.js` option, you **HAVE** to also create a
`ionicons.config.scss` file at the same location. The file may remain empty, or you can override ionicons variables in there.

## Configuration

See the `ionicons.config.js` file for possible configurations.
