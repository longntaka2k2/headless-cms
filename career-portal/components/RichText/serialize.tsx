/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import { Text } from 'slate'


// eslint-disable-next-line no-use-before-define
type Children = Leaf[]

type Leaf = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Children
  url?: string
  [key: string]: unknown
}

const serialize = (children: { map: (arg0: (node: any, i: any) => JSX.Element | null) => React.ReactElement<any, string | React.JSXElementConstructor<any>>[] }): React.ReactElement[] =>
  children.map((node: {
    relationTo: string, text: string | null | undefined; bold: any; id: any ;code: any; italic: any; underline: any; strikethrough: any; type: any; children: any; url: string | null | undefined , value: any 
}, i: React.Key | null | undefined) => {
  
    if (Text.isText(node)) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

      if (node.bold) {
        text = <strong key={i}>{text}</strong>
      }

      if (node.code) {
        text = <code key={i}>{text}</code>
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>
      }

      if (node.underline) {
        text = (
          <span style={{ textDecoration: 'underline' }} key={i}>
            {text}
          </span>
        )
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: 'line-through' }} key={i}>
            {text}
          </span>
        )
      }

      return <Fragment key={i}>{text}</Fragment>
    }
    if (node.relationTo === "media" && node.type === "upload" && node.value) {
      const { alt, url } = node.value;
      return <img src={url} alt={alt} key={i} style={{width:'100%' , height:'auto'}}/>;
    }
    if (node.type === "video" && node.id ) {
      const url = node.id
      return ( <div key={i}>
                <iframe style={{width:'100%',height:'100%',minHeight:'350px'}} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           </div>   );
        
    }
    if (!node) {
      return null
    }

    switch (node.type) {
      case 'h1':
        return <h1 className='fs-md-18' key={i}>{serialize(node.children)}</h1>
      case 'h2':
        return <h2 className='fs-md-18' key={i}>{serialize(node.children)}</h2>
      case 'h3':
        return <h3 className='fs-md-16' key={i}>{serialize(node.children)}</h3>
      case 'h4':
        return <h4 className='fs-md-16' key={i}>{serialize(node.children)}</h4>
      case 'h5':
        return <h5 className='fs-md-16' key={i}>{serialize(node.children)}</h5>
      case 'h6':
        return <h6 className='fs-md-16' key={i}>{serialize(node.children)}</h6>
      case 'blockquote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>
      case 'ul':
        return <ul className='fs-md-14' key={i}>{serialize(node.children)}</ul>
      case 'ol':
        return <ol className='fs-md-14' key={i}>{serialize(node.children)}</ol>
      // case 'video':
      //     return ( <video style={{ width: '100%' }} controls autoPlay muted loop>
      //     <source src={node?.id } type="video/mp4" />
      //   </video>)
      case 'li':
        return <li className='fs-md-14' key={i}>{serialize(node.children)}</li>
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i} className='fs-md-14'>
            {serialize(node.children)}
          </a>
        )

      default:
        return <p key={i}>{serialize(node.children)}</p>
    }
  })

export default serialize
