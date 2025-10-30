import Head from "next/head";

const SEO = (props: any) => {
  let result: any = [];
  for (const key in props) {
    if (props[key]) {
      switch (key) {
        case "metaDescription":
          result.push(
            <meta name="description" content={props[key]} key={props[key]} />
          );
          break;
        case "metaTitle":
          result.push(<title key={props[key]}>{props[key]}</title>);
          break;
        // case "metaImage":
        //   result.push(
        //     <meta key={"og:title"} property="og:title" content={x.title} />
        //   );
        // break;
        case "caronicalUrl": {
          result.push(
            <link rel="canonical" href={props[key]} key={props[key]} />
          );
          break;
        }
        case "metaSocial":
          props[key].forEach((x: any) => {
            let metas = [
              <meta key={"og:title"} property="og:title" content={x.title} />,
              <meta
                key={"og:description"}
                property="og:description"
                content={x.description}
              />,
            ];
            if (x?.image?.data?.attributes) {
              metas.push(
                <meta
                  property="og:image"
                  content={x?.image?.data?.attributes.url}
                  key={x?.image?.data?.attributes.url}
                />
              );
            }
            result = [...result, ...metas];
          });
          break;
      }
    }
  }
  return <Head>{...result}</Head>;
};

export default SEO;
