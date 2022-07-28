type isPillarMen1 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type isPillarMen2 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `false`
