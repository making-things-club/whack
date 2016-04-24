export default function getChildrenWidthProps(children, childProps, optionalProps) {

  const combinedProps = optionalProps ? Object.assign({}, childProps, optionalProps) : childProps;

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { ...childProps });
  });
  return childrenWithProps;
}
