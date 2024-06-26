import {
  Anchor_default
} from "./chunk-NO4TJU3D.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-SCFAMNOP.js";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/react-bootstrap/esm/Pagination.js
var import_classnames2 = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/PageItem.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var PageItem = React.forwardRef(({
  active = false,
  disabled = false,
  className,
  style,
  activeLabel = "(current)",
  children,
  linkStyle,
  linkClassName,
  as = Anchor_default,
  ...props
}, ref) => {
  const Component = active || disabled ? "span" : as;
  return (0, import_jsx_runtime.jsx)("li", {
    ref,
    style,
    className: (0, import_classnames.default)(className, "page-item", {
      active,
      disabled
    }),
    children: (0, import_jsx_runtime2.jsxs)(Component, {
      className: (0, import_classnames.default)("page-link", linkClassName),
      style: linkStyle,
      ...props,
      children: [children, active && activeLabel && (0, import_jsx_runtime.jsx)("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.displayName = "PageItem";
var PageItem_default = PageItem;
function createButton(name, defaultValue, label = name) {
  const Button = React.forwardRef(({
    children,
    ...props
  }, ref) => (0, import_jsx_runtime2.jsxs)(PageItem, {
    ...props,
    ref,
    children: [(0, import_jsx_runtime.jsx)("span", {
      "aria-hidden": "true",
      children: children || defaultValue
    }), (0, import_jsx_runtime.jsx)("span", {
      className: "visually-hidden",
      children: label
    })]
  }));
  Button.displayName = name;
  return Button;
}
var First = createButton("First", "«");
var Prev = createButton("Prev", "‹", "Previous");
var Ellipsis = createButton("Ellipsis", "…", "More");
var Next = createButton("Next", "›");
var Last = createButton("Last", "»");

// node_modules/react-bootstrap/esm/Pagination.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var Pagination = React2.forwardRef(({
  bsPrefix,
  className,
  size,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "pagination");
  return (0, import_jsx_runtime3.jsx)("ul", {
    ref,
    ...props,
    className: (0, import_classnames2.default)(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
  });
});
Pagination.displayName = "Pagination";
var Pagination_default = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem_default,
  Next,
  Last
});

export {
  PageItem_default,
  Pagination_default
};
//# sourceMappingURL=chunk-ZS4T6VJA.js.map
