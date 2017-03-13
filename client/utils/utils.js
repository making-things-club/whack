export default function getChildrenWithProps(children, childProps, optionalProps) {

  const combinedProps = optionalProps ? Object.assign({}, childProps, optionalProps) : childProps;

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { ...childProps });
  });
  return childrenWithProps;
}
