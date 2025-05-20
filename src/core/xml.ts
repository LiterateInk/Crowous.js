import { XMLParser } from "fast-xml-parser";

export const parseXML = <T>(content: string): { root: T } => {
  const parser = new XMLParser({
    attributeNamePrefix: "",
    ignoreAttributes: false,
    textNodeName: "content"
  });

  return parser.parse(content);
};
