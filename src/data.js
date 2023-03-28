export default {
  nodes: [
    { id: "Myriel", group: 1 },
    { id: "Napoleon", group: 1 },
    { id: "Mlle.Baptistine", group: 1 },
    { id: "Mme.Magloire", group: 1 },
    { id: "CountessdeLo", group: 1 },
    { id: "Geborand", group: 1 },
    { id: "Champtercier", group: 1 },
    { id: "Cravatte", group: 1 },
    { id: "Count", group: 1 },
    { id: "OldMan", group: 1 },
    { id: "Labarre", group: 2 },
    { id: "Valjean", group: 2 },
    { id: "Marguerite", group: 3 },
    { id: "Mme.deR", group: 2 },
    { id: "Isabeau", group: 2 },
    { id: "Gervais", group: 2 },
    { id: "Tholomyes", group: 3 },
    { id: "Listolier", group: 3 },
    { id: "Fameuil", group: 3 },
    { id: "Blacheville", group: 3 },
    { id: "Favourite", group: 3 },
    { id: "Dahlia", group: 3 },
    { id: "Zephine", group: 3 },
    { id: "Fantine", group: 3 },
    { id: "Mme.Thenardier", group: 4 },
    { id: "Thenardier", group: 4 },
    { id: "Cosette", group: 5 },
    { id: "Javert", group: 4 },
    { id: "Fauchelevent", group: 0 },
    { id: "Bamatabois", group: 2 },
    { id: "Perpetue", group: 3 },
    { id: "Simplice", group: 2 },
    { id: "Scaufflaire", group: 2 },
    { id: "Woman1", group: 2 },
    { id: "Judge", group: 2 },
    { id: "Champmathieu", group: 2 },
    { id: "Brevet", group: 2 },
    { id: "Chenildieu", group: 2 },
    { id: "Cochepaille", group: 2 },
    { id: "Pontmercy", group: 4 },
    { id: "Boulatruelle", group: 6 },
    { id: "Eponine", group: 4 },
    { id: "Anzelma", group: 4 },
    { id: "Woman2", group: 5 },
    { id: "MotherInnocent", group: 0 },
    { id: "Gribier", group: 0 },
    { id: "Jondrette", group: 7 },
    { id: "Mme.Burgon", group: 7 },
    { id: "Gavroche", group: 8 },
    { id: "Gillenormand", group: 5 },
    { id: "Magnon", group: 5 },
    { id: "Mlle.Gillenormand", group: 5 },
    { id: "Mme.Pontmercy", group: 5 },
    { id: "Mlle.Vaubois", group: 5 },
    { id: "Lt.Gillenormand", group: 5 },
    { id: "Marius", group: 8 },
    { id: "BaronessT", group: 5 },
    { id: "Mabeuf", group: 8 },
    { id: "Enjolras", group: 8 },
    { id: "Combeferre", group: 8 },
    { id: "Prouvaire", group: 8 },
    { id: "Feuilly", group: 8 },
    { id: "Courfeyrac", group: 8 },
    { id: "Bahorel", group: 8 },
    { id: "Bossuet", group: 8 },
    { id: "Joly", group: 8 },
    { id: "Grantaire", group: 8 },
    { id: "MotherPlutarch", group: 9 },
    { id: "Gueulemer", group: 4 },
    { id: "Babet", group: 4 },
    { id: "Claquesous", group: 4 },
    { id: "Montparnasse", group: 4 },
    { id: "Toussaint", group: 5 },
    { id: "Child1", group: 10 },
    { id: "Child2", group: 10 },
    { id: "Brujon", group: 4 },
    { id: "Mme.Hucheloup", group: 8 }
  ],
  links: [
    {
      source: "Napoleon",
      target: "Myriel",
      value: 1,
      sourceId: 1,
      targetId: 0
    },
    {
      source: "Mlle.Baptistine",
      target: "Myriel",
      value: 8,
      sourceId: 2,
      targetId: 0
    },
    {
      source: "Mme.Magloire",
      target: "Myriel",
      value: 10,
      sourceId: 3,
      targetId: 0
    },
    {
      source: "Mme.Magloire",
      target: "Mlle.Baptistine",
      value: 6,
      sourceId: 3,
      targetId: 2
    },
    {
      source: "CountessdeLo",
      target: "Myriel",
      value: 1,
      sourceId: 4,
      targetId: 0
    },
    {
      source: "Geborand",
      target: "Myriel",
      value: 1,
      sourceId: 5,
      targetId: 0
    },
    {
      source: "Champtercier",
      target: "Myriel",
      value: 1,
      sourceId: 6,
      targetId: 0
    },
    {
      source: "Cravatte",
      target: "Myriel",
      value: 1,
      sourceId: 7,
      targetId: 0
    },
    { source: "Count", target: "Myriel", value: 2, sourceId: 8, targetId: 0 },
    { source: "OldMan", target: "Myriel", value: 1, sourceId: 9, targetId: 0 },
    {
      source: "Valjean",
      target: "Labarre",
      value: 1,
      sourceId: 11,
      targetId: 10
    },
    {
      source: "Valjean",
      target: "Mme.Magloire",
      value: 3,
      sourceId: 11,
      targetId: 3
    },
    {
      source: "Valjean",
      target: "Mlle.Baptistine",
      value: 3,
      sourceId: 11,
      targetId: 2
    },
    {
      source: "Valjean",
      target: "Myriel",
      value: 5,
      sourceId: 11,
      targetId: 0
    },
    {
      source: "Marguerite",
      target: "Valjean",
      value: 1,
      sourceId: 12,
      targetId: 11
    },
    {
      source: "Mme.deR",
      target: "Valjean",
      value: 1,
      sourceId: 13,
      targetId: 11
    },
    {
      source: "Isabeau",
      target: "Valjean",
      value: 1,
      sourceId: 14,
      targetId: 11
    },
    {
      source: "Gervais",
      target: "Valjean",
      value: 1,
      sourceId: 15,
      targetId: 11
    },
    {
      source: "Listolier",
      target: "Tholomyes",
      value: 4,
      sourceId: 17,
      targetId: 16
    },
    {
      source: "Fameuil",
      target: "Tholomyes",
      value: 4,
      sourceId: 18,
      targetId: 16
    },
    {
      source: "Fameuil",
      target: "Listolier",
      value: 4,
      sourceId: 18,
      targetId: 17
    },
    {
      source: "Blacheville",
      target: "Tholomyes",
      value: 4,
      sourceId: 19,
      targetId: 16
    },
    {
      source: "Blacheville",
      target: "Listolier",
      value: 4,
      sourceId: 19,
      targetId: 17
    },
    {
      source: "Blacheville",
      target: "Fameuil",
      value: 4,
      sourceId: 19,
      targetId: 18
    },
    {
      source: "Favourite",
      target: "Tholomyes",
      value: 3,
      sourceId: 20,
      targetId: 16
    },
    {
      source: "Favourite",
      target: "Listolier",
      value: 3,
      sourceId: 20,
      targetId: 17
    },
    {
      source: "Favourite",
      target: "Fameuil",
      value: 3,
      sourceId: 20,
      targetId: 18
    },
    {
      source: "Favourite",
      target: "Blacheville",
      value: 4,
      sourceId: 20,
      targetId: 19
    },
    {
      source: "Dahlia",
      target: "Tholomyes",
      value: 3,
      sourceId: 21,
      targetId: 16
    },
    {
      source: "Dahlia",
      target: "Listolier",
      value: 3,
      sourceId: 21,
      targetId: 17
    },
    {
      source: "Dahlia",
      target: "Fameuil",
      value: 3,
      sourceId: 21,
      targetId: 18
    },
    {
      source: "Dahlia",
      target: "Blacheville",
      value: 3,
      sourceId: 21,
      targetId: 19
    },
    {
      source: "Dahlia",
      target: "Favourite",
      value: 5,
      sourceId: 21,
      targetId: 20
    },
    {
      source: "Zephine",
      target: "Tholomyes",
      value: 3,
      sourceId: 22,
      targetId: 16
    },
    {
      source: "Zephine",
      target: "Listolier",
      value: 3,
      sourceId: 22,
      targetId: 17
    },
    {
      source: "Zephine",
      target: "Fameuil",
      value: 3,
      sourceId: 22,
      targetId: 18
    },
    {
      source: "Zephine",
      target: "Blacheville",
      value: 3,
      sourceId: 22,
      targetId: 19
    },
    {
      source: "Zephine",
      target: "Favourite",
      value: 4,
      sourceId: 22,
      targetId: 20
    },
    {
      source: "Zephine",
      target: "Dahlia",
      value: 4,
      sourceId: 22,
      targetId: 21
    },
    {
      source: "Fantine",
      target: "Tholomyes",
      value: 3,
      sourceId: 23,
      targetId: 16
    },
    {
      source: "Fantine",
      target: "Listolier",
      value: 3,
      sourceId: 23,
      targetId: 17
    },
    {
      source: "Fantine",
      target: "Fameuil",
      value: 3,
      sourceId: 23,
      targetId: 18
    },
    {
      source: "Fantine",
      target: "Blacheville",
      value: 3,
      sourceId: 23,
      targetId: 19
    },
    {
      source: "Fantine",
      target: "Favourite",
      value: 4,
      sourceId: 23,
      targetId: 20
    },
    {
      source: "Fantine",
      target: "Dahlia",
      value: 4,
      sourceId: 23,
      targetId: 21
    },
    {
      source: "Fantine",
      target: "Zephine",
      value: 4,
      sourceId: 23,
      targetId: 22
    },
    {
      source: "Fantine",
      target: "Marguerite",
      value: 2,
      sourceId: 23,
      targetId: 12
    },
    {
      source: "Fantine",
      target: "Valjean",
      value: 9,
      sourceId: 23,
      targetId: 11
    },
    {
      source: "Mme.Thenardier",
      target: "Fantine",
      value: 2,
      sourceId: 24,
      targetId: 23
    },
    {
      source: "Mme.Thenardier",
      target: "Valjean",
      value: 7,
      sourceId: 24,
      targetId: 11
    },
    {
      source: "Thenardier",
      target: "Mme.Thenardier",
      value: 13,
      sourceId: 25,
      targetId: 24
    },
    {
      source: "Thenardier",
      target: "Fantine",
      value: 1,
      sourceId: 25,
      targetId: 23
    },
    {
      source: "Thenardier",
      target: "Valjean",
      value: 12,
      sourceId: 25,
      targetId: 11
    },
    {
      source: "Cosette",
      target: "Mme.Thenardier",
      value: 4,
      sourceId: 26,
      targetId: 24
    },
    {
      source: "Cosette",
      target: "Valjean",
      value: 31,
      sourceId: 26,
      targetId: 11
    },
    {
      source: "Cosette",
      target: "Tholomyes",
      value: 1,
      sourceId: 26,
      targetId: 16
    },
    {
      source: "Cosette",
      target: "Thenardier",
      value: 1,
      sourceId: 26,
      targetId: 25
    },
    {
      source: "Javert",
      target: "Valjean",
      value: 17,
      sourceId: 27,
      targetId: 11
    },
    {
      source: "Javert",
      target: "Fantine",
      value: 5,
      sourceId: 27,
      targetId: 23
    },
    {
      source: "Javert",
      target: "Thenardier",
      value: 5,
      sourceId: 27,
      targetId: 25
    },
    {
      source: "Javert",
      target: "Mme.Thenardier",
      value: 1,
      sourceId: 27,
      targetId: 24
    },
    {
      source: "Javert",
      target: "Cosette",
      value: 1,
      sourceId: 27,
      targetId: 26
    },
    {
      source: "Fauchelevent",
      target: "Valjean",
      value: 8,
      sourceId: 28,
      targetId: 11
    },
    {
      source: "Fauchelevent",
      target: "Javert",
      value: 1,
      sourceId: 28,
      targetId: 27
    },
    {
      source: "Bamatabois",
      target: "Fantine",
      value: 1,
      sourceId: 29,
      targetId: 23
    },
    {
      source: "Bamatabois",
      target: "Javert",
      value: 1,
      sourceId: 29,
      targetId: 27
    },
    {
      source: "Bamatabois",
      target: "Valjean",
      value: 2,
      sourceId: 29,
      targetId: 11
    },
    {
      source: "Perpetue",
      target: "Fantine",
      value: 1,
      sourceId: 30,
      targetId: 23
    },
    {
      source: "Simplice",
      target: "Perpetue",
      value: 2,
      sourceId: 31,
      targetId: 30
    },
    {
      source: "Simplice",
      target: "Valjean",
      value: 3,
      sourceId: 31,
      targetId: 11
    },
    {
      source: "Simplice",
      target: "Fantine",
      value: 2,
      sourceId: 31,
      targetId: 23
    },
    {
      source: "Simplice",
      target: "Javert",
      value: 1,
      sourceId: 31,
      targetId: 27
    },
    {
      source: "Scaufflaire",
      target: "Valjean",
      value: 1,
      sourceId: 32,
      targetId: 11
    },
    {
      source: "Woman1",
      target: "Valjean",
      value: 2,
      sourceId: 33,
      targetId: 11
    },
    {
      source: "Woman1",
      target: "Javert",
      value: 1,
      sourceId: 33,
      targetId: 27
    },
    {
      source: "Judge",
      target: "Valjean",
      value: 3,
      sourceId: 34,
      targetId: 11
    },
    {
      source: "Judge",
      target: "Bamatabois",
      value: 2,
      sourceId: 34,
      targetId: 29
    },
    {
      source: "Champmathieu",
      target: "Valjean",
      value: 3,
      sourceId: 35,
      targetId: 11
    },
    {
      source: "Champmathieu",
      target: "Judge",
      value: 3,
      sourceId: 35,
      targetId: 34
    },
    {
      source: "Champmathieu",
      target: "Bamatabois",
      value: 2,
      sourceId: 35,
      targetId: 29
    },
    { source: "Brevet", target: "Judge", value: 2, sourceId: 36, targetId: 34 },
    {
      source: "Brevet",
      target: "Champmathieu",
      value: 2,
      sourceId: 36,
      targetId: 35
    },
    {
      source: "Brevet",
      target: "Valjean",
      value: 2,
      sourceId: 36,
      targetId: 11
    },
    {
      source: "Brevet",
      target: "Bamatabois",
      value: 1,
      sourceId: 36,
      targetId: 29
    },
    {
      source: "Chenildieu",
      target: "Judge",
      value: 2,
      sourceId: 37,
      targetId: 34
    },
    {
      source: "Chenildieu",
      target: "Champmathieu",
      value: 2,
      sourceId: 37,
      targetId: 35
    },
    {
      source: "Chenildieu",
      target: "Brevet",
      value: 2,
      sourceId: 37,
      targetId: 36
    },
    {
      source: "Chenildieu",
      target: "Valjean",
      value: 2,
      sourceId: 37,
      targetId: 11
    },
    {
      source: "Chenildieu",
      target: "Bamatabois",
      value: 1,
      sourceId: 37,
      targetId: 29
    },
    {
      source: "Cochepaille",
      target: "Judge",
      value: 2,
      sourceId: 38,
      targetId: 34
    },
    {
      source: "Cochepaille",
      target: "Champmathieu",
      value: 2,
      sourceId: 38,
      targetId: 35
    },
    {
      source: "Cochepaille",
      target: "Brevet",
      value: 2,
      sourceId: 38,
      targetId: 36
    },
    {
      source: "Cochepaille",
      target: "Chenildieu",
      value: 2,
      sourceId: 38,
      targetId: 37
    },
    {
      source: "Cochepaille",
      target: "Valjean",
      value: 2,
      sourceId: 38,
      targetId: 11
    },
    {
      source: "Cochepaille",
      target: "Bamatabois",
      value: 1,
      sourceId: 38,
      targetId: 29
    },
    {
      source: "Pontmercy",
      target: "Thenardier",
      value: 1,
      sourceId: 39,
      targetId: 25
    },
    {
      source: "Boulatruelle",
      target: "Thenardier",
      value: 1,
      sourceId: 40,
      targetId: 25
    },
    {
      source: "Eponine",
      target: "Mme.Thenardier",
      value: 2,
      sourceId: 41,
      targetId: 24
    },
    {
      source: "Eponine",
      target: "Thenardier",
      value: 3,
      sourceId: 41,
      targetId: 25
    },
    {
      source: "Anzelma",
      target: "Eponine",
      value: 2,
      sourceId: 42,
      targetId: 41
    },
    {
      source: "Anzelma",
      target: "Thenardier",
      value: 2,
      sourceId: 42,
      targetId: 25
    },
    {
      source: "Anzelma",
      target: "Mme.Thenardier",
      value: 1,
      sourceId: 42,
      targetId: 24
    },
    {
      source: "Woman2",
      target: "Valjean",
      value: 3,
      sourceId: 43,
      targetId: 11
    },
    {
      source: "Woman2",
      target: "Cosette",
      value: 1,
      sourceId: 43,
      targetId: 26
    },
    {
      source: "Woman2",
      target: "Javert",
      value: 1,
      sourceId: 43,
      targetId: 27
    },
    {
      source: "MotherInnocent",
      target: "Fauchelevent",
      value: 3,
      sourceId: 44,
      targetId: 28
    },
    {
      source: "MotherInnocent",
      target: "Valjean",
      value: 1,
      sourceId: 44,
      targetId: 11
    },
    {
      source: "Gribier",
      target: "Fauchelevent",
      value: 2,
      sourceId: 45,
      targetId: 28
    },
    {
      source: "Mme.Burgon",
      target: "Jondrette",
      value: 1,
      sourceId: 47,
      targetId: 46
    },
    {
      source: "Gavroche",
      target: "Mme.Burgon",
      value: 2,
      sourceId: 48,
      targetId: 47
    },
    {
      source: "Gavroche",
      target: "Thenardier",
      value: 1,
      sourceId: 48,
      targetId: 25
    },
    {
      source: "Gavroche",
      target: "Javert",
      value: 1,
      sourceId: 48,
      targetId: 27
    },
    {
      source: "Gavroche",
      target: "Valjean",
      value: 1,
      sourceId: 48,
      targetId: 11
    },
    {
      source: "Gillenormand",
      target: "Cosette",
      value: 3,
      sourceId: 49,
      targetId: 26
    },
    {
      source: "Gillenormand",
      target: "Valjean",
      value: 2,
      sourceId: 49,
      targetId: 11
    },
    {
      source: "Magnon",
      target: "Gillenormand",
      value: 1,
      sourceId: 50,
      targetId: 49
    },
    {
      source: "Magnon",
      target: "Mme.Thenardier",
      value: 1,
      sourceId: 50,
      targetId: 24
    },
    {
      source: "Mlle.Gillenormand",
      target: "Gillenormand",
      value: 9,
      sourceId: 51,
      targetId: 49
    },
    {
      source: "Mlle.Gillenormand",
      target: "Cosette",
      value: 2,
      sourceId: 51,
      targetId: 26
    },
    {
      source: "Mlle.Gillenormand",
      target: "Valjean",
      value: 2,
      sourceId: 51,
      targetId: 11
    },
    {
      source: "Mme.Pontmercy",
      target: "Mlle.Gillenormand",
      value: 1,
      sourceId: 52,
      targetId: 51
    },
    {
      source: "Mme.Pontmercy",
      target: "Pontmercy",
      value: 1,
      sourceId: 52,
      targetId: 39
    },
    {
      source: "Mlle.Vaubois",
      target: "Mlle.Gillenormand",
      value: 1,
      sourceId: 53,
      targetId: 51
    },
    {
      source: "Lt.Gillenormand",
      target: "Mlle.Gillenormand",
      value: 2,
      sourceId: 54,
      targetId: 51
    },
    {
      source: "Lt.Gillenormand",
      target: "Gillenormand",
      value: 1,
      sourceId: 54,
      targetId: 49
    },
    {
      source: "Lt.Gillenormand",
      target: "Cosette",
      value: 1,
      sourceId: 54,
      targetId: 26
    },
    {
      source: "Marius",
      target: "Mlle.Gillenormand",
      value: 6,
      sourceId: 55,
      targetId: 51
    },
    {
      source: "Marius",
      target: "Gillenormand",
      value: 12,
      sourceId: 55,
      targetId: 49
    },
    {
      source: "Marius",
      target: "Pontmercy",
      value: 1,
      sourceId: 55,
      targetId: 39
    },
    {
      source: "Marius",
      target: "Lt.Gillenormand",
      value: 1,
      sourceId: 55,
      targetId: 54
    },
    {
      source: "Marius",
      target: "Cosette",
      value: 21,
      sourceId: 55,
      targetId: 26
    },
    {
      source: "Marius",
      target: "Valjean",
      value: 19,
      sourceId: 55,
      targetId: 11
    },
    {
      source: "Marius",
      target: "Tholomyes",
      value: 1,
      sourceId: 55,
      targetId: 16
    },
    {
      source: "Marius",
      target: "Thenardier",
      value: 2,
      sourceId: 55,
      targetId: 25
    },
    {
      source: "Marius",
      target: "Eponine",
      value: 5,
      sourceId: 55,
      targetId: 41
    },
    {
      source: "Marius",
      target: "Gavroche",
      value: 4,
      sourceId: 55,
      targetId: 48
    },
    {
      source: "BaronessT",
      target: "Gillenormand",
      value: 1,
      sourceId: 56,
      targetId: 49
    },
    {
      source: "BaronessT",
      target: "Marius",
      value: 1,
      sourceId: 56,
      targetId: 55
    },
    {
      source: "Mabeuf",
      target: "Marius",
      value: 1,
      sourceId: 57,
      targetId: 55
    },
    {
      source: "Mabeuf",
      target: "Eponine",
      value: 1,
      sourceId: 57,
      targetId: 41
    },
    {
      source: "Mabeuf",
      target: "Gavroche",
      value: 1,
      sourceId: 57,
      targetId: 48
    },
    {
      source: "Enjolras",
      target: "Marius",
      value: 7,
      sourceId: 58,
      targetId: 55
    },
    {
      source: "Enjolras",
      target: "Gavroche",
      value: 7,
      sourceId: 58,
      targetId: 48
    },
    {
      source: "Enjolras",
      target: "Javert",
      value: 6,
      sourceId: 58,
      targetId: 27
    },
    {
      source: "Enjolras",
      target: "Mabeuf",
      value: 1,
      sourceId: 58,
      targetId: 57
    },
    {
      source: "Enjolras",
      target: "Valjean",
      value: 4,
      sourceId: 58,
      targetId: 11
    },
    {
      source: "Combeferre",
      target: "Enjolras",
      value: 15,
      sourceId: 59,
      targetId: 58
    },
    {
      source: "Combeferre",
      target: "Marius",
      value: 5,
      sourceId: 59,
      targetId: 55
    },
    {
      source: "Combeferre",
      target: "Gavroche",
      value: 6,
      sourceId: 59,
      targetId: 48
    },
    {
      source: "Combeferre",
      target: "Mabeuf",
      value: 2,
      sourceId: 59,
      targetId: 57
    },
    {
      source: "Prouvaire",
      target: "Gavroche",
      value: 1,
      sourceId: 60,
      targetId: 48
    },
    {
      source: "Prouvaire",
      target: "Enjolras",
      value: 4,
      sourceId: 60,
      targetId: 58
    },
    {
      source: "Prouvaire",
      target: "Combeferre",
      value: 2,
      sourceId: 60,
      targetId: 59
    },
    {
      source: "Feuilly",
      target: "Gavroche",
      value: 2,
      sourceId: 61,
      targetId: 48
    },
    {
      source: "Feuilly",
      target: "Enjolras",
      value: 6,
      sourceId: 61,
      targetId: 58
    },
    {
      source: "Feuilly",
      target: "Prouvaire",
      value: 2,
      sourceId: 61,
      targetId: 60
    },
    {
      source: "Feuilly",
      target: "Combeferre",
      value: 5,
      sourceId: 61,
      targetId: 59
    },
    {
      source: "Feuilly",
      target: "Mabeuf",
      value: 1,
      sourceId: 61,
      targetId: 57
    },
    {
      source: "Feuilly",
      target: "Marius",
      value: 1,
      sourceId: 61,
      targetId: 55
    },
    {
      source: "Courfeyrac",
      target: "Marius",
      value: 9,
      sourceId: 62,
      targetId: 55
    },
    {
      source: "Courfeyrac",
      target: "Enjolras",
      value: 17,
      sourceId: 62,
      targetId: 58
    },
    {
      source: "Courfeyrac",
      target: "Combeferre",
      value: 13,
      sourceId: 62,
      targetId: 59
    },
    {
      source: "Courfeyrac",
      target: "Gavroche",
      value: 7,
      sourceId: 62,
      targetId: 48
    },
    {
      source: "Courfeyrac",
      target: "Mabeuf",
      value: 2,
      sourceId: 62,
      targetId: 57
    },
    {
      source: "Courfeyrac",
      target: "Eponine",
      value: 1,
      sourceId: 62,
      targetId: 41
    },
    {
      source: "Courfeyrac",
      target: "Feuilly",
      value: 6,
      sourceId: 62,
      targetId: 61
    },
    {
      source: "Courfeyrac",
      target: "Prouvaire",
      value: 3,
      sourceId: 62,
      targetId: 60
    },
    {
      source: "Bahorel",
      target: "Combeferre",
      value: 5,
      sourceId: 63,
      targetId: 59
    },
    {
      source: "Bahorel",
      target: "Gavroche",
      value: 5,
      sourceId: 63,
      targetId: 48
    },
    {
      source: "Bahorel",
      target: "Courfeyrac",
      value: 6,
      sourceId: 63,
      targetId: 62
    },
    {
      source: "Bahorel",
      target: "Mabeuf",
      value: 2,
      sourceId: 63,
      targetId: 57
    },
    {
      source: "Bahorel",
      target: "Enjolras",
      value: 4,
      sourceId: 63,
      targetId: 58
    },
    {
      source: "Bahorel",
      target: "Feuilly",
      value: 3,
      sourceId: 63,
      targetId: 61
    },
    {
      source: "Bahorel",
      target: "Prouvaire",
      value: 2,
      sourceId: 63,
      targetId: 60
    },
    {
      source: "Bahorel",
      target: "Marius",
      value: 1,
      sourceId: 63,
      targetId: 55
    },
    {
      source: "Bossuet",
      target: "Marius",
      value: 5,
      sourceId: 64,
      targetId: 55
    },
    {
      source: "Bossuet",
      target: "Courfeyrac",
      value: 12,
      sourceId: 64,
      targetId: 62
    },
    {
      source: "Bossuet",
      target: "Gavroche",
      value: 5,
      sourceId: 64,
      targetId: 48
    },
    {
      source: "Bossuet",
      target: "Bahorel",
      value: 4,
      sourceId: 64,
      targetId: 63
    },
    {
      source: "Bossuet",
      target: "Enjolras",
      value: 10,
      sourceId: 64,
      targetId: 58
    },
    {
      source: "Bossuet",
      target: "Feuilly",
      value: 6,
      sourceId: 64,
      targetId: 61
    },
    {
      source: "Bossuet",
      target: "Prouvaire",
      value: 2,
      sourceId: 64,
      targetId: 60
    },
    {
      source: "Bossuet",
      target: "Combeferre",
      value: 9,
      sourceId: 64,
      targetId: 59
    },
    {
      source: "Bossuet",
      target: "Mabeuf",
      value: 1,
      sourceId: 64,
      targetId: 57
    },
    {
      source: "Bossuet",
      target: "Valjean",
      value: 1,
      sourceId: 64,
      targetId: 11
    },
    { source: "Joly", target: "Bahorel", value: 5, sourceId: 65, targetId: 63 },
    { source: "Joly", target: "Bossuet", value: 7, sourceId: 65, targetId: 64 },
    {
      source: "Joly",
      target: "Gavroche",
      value: 3,
      sourceId: 65,
      targetId: 48
    },
    {
      source: "Joly",
      target: "Courfeyrac",
      value: 5,
      sourceId: 65,
      targetId: 62
    },
    {
      source: "Joly",
      target: "Enjolras",
      value: 5,
      sourceId: 65,
      targetId: 58
    },
    { source: "Joly", target: "Feuilly", value: 5, sourceId: 65, targetId: 61 },
    {
      source: "Joly",
      target: "Prouvaire",
      value: 2,
      sourceId: 65,
      targetId: 60
    },
    {
      source: "Joly",
      target: "Combeferre",
      value: 5,
      sourceId: 65,
      targetId: 59
    },
    { source: "Joly", target: "Mabeuf", value: 1, sourceId: 65, targetId: 57 },
    { source: "Joly", target: "Marius", value: 2, sourceId: 65, targetId: 55 },
    {
      source: "Grantaire",
      target: "Bossuet",
      value: 3,
      sourceId: 66,
      targetId: 64
    },
    {
      source: "Grantaire",
      target: "Enjolras",
      value: 3,
      sourceId: 66,
      targetId: 58
    },
    {
      source: "Grantaire",
      target: "Combeferre",
      value: 1,
      sourceId: 66,
      targetId: 59
    },
    {
      source: "Grantaire",
      target: "Courfeyrac",
      value: 2,
      sourceId: 66,
      targetId: 62
    },
    {
      source: "Grantaire",
      target: "Joly",
      value: 2,
      sourceId: 66,
      targetId: 65
    },
    {
      source: "Grantaire",
      target: "Gavroche",
      value: 1,
      sourceId: 66,
      targetId: 48
    },
    {
      source: "Grantaire",
      target: "Bahorel",
      value: 1,
      sourceId: 66,
      targetId: 63
    },
    {
      source: "Grantaire",
      target: "Feuilly",
      value: 1,
      sourceId: 66,
      targetId: 61
    },
    {
      source: "Grantaire",
      target: "Prouvaire",
      value: 1,
      sourceId: 66,
      targetId: 60
    },
    {
      source: "MotherPlutarch",
      target: "Mabeuf",
      value: 3,
      sourceId: 67,
      targetId: 57
    },
    {
      source: "Gueulemer",
      target: "Thenardier",
      value: 5,
      sourceId: 68,
      targetId: 25
    },
    {
      source: "Gueulemer",
      target: "Valjean",
      value: 1,
      sourceId: 68,
      targetId: 11
    },
    {
      source: "Gueulemer",
      target: "Mme.Thenardier",
      value: 1,
      sourceId: 68,
      targetId: 24
    },
    {
      source: "Gueulemer",
      target: "Javert",
      value: 1,
      sourceId: 68,
      targetId: 27
    },
    {
      source: "Gueulemer",
      target: "Gavroche",
      value: 1,
      sourceId: 68,
      targetId: 48
    },
    {
      source: "Gueulemer",
      target: "Eponine",
      value: 1,
      sourceId: 68,
      targetId: 41
    },
    {
      source: "Babet",
      target: "Thenardier",
      value: 6,
      sourceId: 69,
      targetId: 25
    },
    {
      source: "Babet",
      target: "Gueulemer",
      value: 6,
      sourceId: 69,
      targetId: 68
    },
    {
      source: "Babet",
      target: "Valjean",
      value: 1,
      sourceId: 69,
      targetId: 11
    },
    {
      source: "Babet",
      target: "Mme.Thenardier",
      value: 1,
      sourceId: 69,
      targetId: 24
    },
    { source: "Babet", target: "Javert", value: 2, sourceId: 69, targetId: 27 },
    {
      source: "Babet",
      target: "Gavroche",
      value: 1,
      sourceId: 69,
      targetId: 48
    },
    {
      source: "Babet",
      target: "Eponine",
      value: 1,
      sourceId: 69,
      targetId: 41
    },
    {
      source: "Claquesous",
      target: "Thenardier",
      value: 4,
      sourceId: 70,
      targetId: 25
    },
    {
      source: "Claquesous",
      target: "Babet",
      value: 4,
      sourceId: 70,
      targetId: 69
    },
    {
      source: "Claquesous",
      target: "Gueulemer",
      value: 4,
      sourceId: 70,
      targetId: 68
    },
    {
      source: "Claquesous",
      target: "Valjean",
      value: 1,
      sourceId: 70,
      targetId: 11
    },
    {
      source: "Claquesous",
      target: "Mme.Thenardier",
      value: 1,
      sourceId: 70,
      targetId: 24
    },
    {
      source: "Claquesous",
      target: "Javert",
      value: 1,
      sourceId: 70,
      targetId: 27
    },
    {
      source: "Claquesous",
      target: "Eponine",
      value: 1,
      sourceId: 70,
      targetId: 41
    },
    {
      source: "Claquesous",
      target: "Enjolras",
      value: 1,
      sourceId: 70,
      targetId: 58
    },
    {
      source: "Montparnasse",
      target: "Javert",
      value: 1,
      sourceId: 71,
      targetId: 27
    },
    {
      source: "Montparnasse",
      target: "Babet",
      value: 2,
      sourceId: 71,
      targetId: 69
    },
    {
      source: "Montparnasse",
      target: "Gueulemer",
      value: 2,
      sourceId: 71,
      targetId: 68
    },
    {
      source: "Montparnasse",
      target: "Claquesous",
      value: 2,
      sourceId: 71,
      targetId: 70
    },
    {
      source: "Montparnasse",
      target: "Valjean",
      value: 1,
      sourceId: 71,
      targetId: 11
    },
    {
      source: "Montparnasse",
      target: "Gavroche",
      value: 1,
      sourceId: 71,
      targetId: 48
    },
    {
      source: "Montparnasse",
      target: "Eponine",
      value: 1,
      sourceId: 71,
      targetId: 41
    },
    {
      source: "Montparnasse",
      target: "Thenardier",
      value: 1,
      sourceId: 71,
      targetId: 25
    },
    {
      source: "Toussaint",
      target: "Cosette",
      value: 2,
      sourceId: 72,
      targetId: 26
    },
    {
      source: "Toussaint",
      target: "Javert",
      value: 1,
      sourceId: 72,
      targetId: 27
    },
    {
      source: "Toussaint",
      target: "Valjean",
      value: 1,
      sourceId: 72,
      targetId: 11
    },
    {
      source: "Child1",
      target: "Gavroche",
      value: 2,
      sourceId: 73,
      targetId: 48
    },
    {
      source: "Child2",
      target: "Gavroche",
      value: 2,
      sourceId: 74,
      targetId: 48
    },
    {
      source: "Child2",
      target: "Child1",
      value: 3,
      sourceId: 74,
      targetId: 73
    },
    { source: "Brujon", target: "Babet", value: 3, sourceId: 75, targetId: 69 },
    {
      source: "Brujon",
      target: "Gueulemer",
      value: 3,
      sourceId: 75,
      targetId: 68
    },
    {
      source: "Brujon",
      target: "Thenardier",
      value: 3,
      sourceId: 75,
      targetId: 25
    },
    {
      source: "Brujon",
      target: "Gavroche",
      value: 1,
      sourceId: 75,
      targetId: 48
    },
    {
      source: "Brujon",
      target: "Eponine",
      value: 1,
      sourceId: 75,
      targetId: 41
    },
    {
      source: "Brujon",
      target: "Claquesous",
      value: 1,
      sourceId: 75,
      targetId: 70
    },
    {
      source: "Brujon",
      target: "Montparnasse",
      value: 1,
      sourceId: 75,
      targetId: 71
    },
    {
      source: "Mme.Hucheloup",
      target: "Bossuet",
      value: 1,
      sourceId: 76,
      targetId: 64
    },
    {
      source: "Mme.Hucheloup",
      target: "Joly",
      value: 1,
      sourceId: 76,
      targetId: 65
    },
    {
      source: "Mme.Hucheloup",
      target: "Grantaire",
      value: 1,
      sourceId: 76,
      targetId: 66
    },
    {
      source: "Mme.Hucheloup",
      target: "Bahorel",
      value: 1,
      sourceId: 76,
      targetId: 63
    },
    {
      source: "Mme.Hucheloup",
      target: "Courfeyrac",
      value: 1,
      sourceId: 76,
      targetId: 62
    },
    {
      source: "Mme.Hucheloup",
      target: "Gavroche",
      value: 1,
      sourceId: 76,
      targetId: 48
    },
    {
      source: "Mme.Hucheloup",
      target: "Enjolras",
      value: 1,
      sourceId: 76,
      targetId: 58
    }
  ],
  colors: [
    "#ee6c3b",
    "#a02c5d",
    "#ec0e47",
    "#710461",
    "#022b7a",
    "#1a1334",
    "#fcbf54",
    "#055459",
    "#abd96d",
    "#14c285",
    "#26294a",
    "#077353"
  ]
};
