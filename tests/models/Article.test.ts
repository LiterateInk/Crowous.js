import news from "@!/news.json";
import { describe, expect, it } from "bun:test";
import { deserialize } from "desero";
import { Article } from "~/models";

describe("ArticleDTO", () => {
  it("should decode [0] to model properly", () => {
    const article = deserialize(Article, news[0]);
    expect(article.id).toBe("a1");
    expect(article.publishedAt).toEqual(new Date("2022-07-01"));
    expect(article.category).toBe("restos");
    expect(article.imageUrl).toBe("http://www.crous-limoges.fr/wp-content/uploads/sites/21/2021/06/Recrutement-300x300.png");
    expect(article.content).toBe("<div>Le Crous de Limoges propose chaque année aux étudiants des emplois.</div>");
  });

  it("should decode [1] to model properly", () => {
    const article = deserialize(Article, news[1]);
    expect(article.id).toBe("a2");
    expect(article.publishedAt).toEqual(new Date("2021-07-21"));
    expect(article.category).toBe("aides");
    expect(article.imageUrl).toBe("http://www.crous-limoges.fr/wp-content/uploads/sites/21/2021/07/PRO-CONSULT-300x169.jpg");
    expect(article.content).toBe("Stress ? Pas le moral ? Questions ou angoisses ? Problèmes familiaux ? Sentiment de solitude ? Difficultés dans tes études ?");
  });
});
