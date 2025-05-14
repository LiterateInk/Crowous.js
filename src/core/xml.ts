import { XMLParser } from "fast-xml-parser";

export const parseXML = (content: string): any => {
  const parser = new XMLParser({
    attributeNamePrefix: "",
    ignoreAttributes: false,
    textNodeName: "content"
  });

  return parser.parse(content);
};
