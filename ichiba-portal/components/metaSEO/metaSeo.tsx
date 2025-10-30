import Head from "next/head";

export default function MetadataComponent(props: any) {
  let result: any = [];
  if (props?.title) {
    result.push(<title key={"title"}>{props?.title}</title>);
  }
  if (props?.image) {
    result.push(
      <meta key={"image"} property="og:image" content={props?.image}></meta>,
    );
  }
  for (const key in props?.data) {
    if (
      props?.data[key]?.attributes?.name &&
      !props?.data[key]?.attributes?.property
    ) {
      result.push(
        <meta
          key={key}
          name={props?.data[key]?.attributes?.name}
          content={props?.data[key]?.attributes?.content}
        />,
      );
    } else if (
      props?.data[key]?.attributes?.property &&
      !props?.data[key]?.attributes?.name
    ) {
      result.push(
        <meta
          key={key}
          property={props?.data[key]?.attributes?.property}
          content={props?.data[key]?.attributes?.content}
        />,
      );
    } else {
      result.push(
        <meta
          key={key}
          property={props?.data[key]?.attributes?.property}
          name={props?.data[key]?.attributes?.name}
          content={props?.data[key]?.attributes?.content}
        />,
      );
    }
  }
  return <Head>{...result}</Head>;
}
