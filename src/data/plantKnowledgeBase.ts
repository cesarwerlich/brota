import { CatalogPlant, IdentifiedPlant } from '../types';

export const PLANT_KNOWLEDGE_BASE: CatalogPlant[] = [
  // ==========================================
  // HORTA (5 espécies)
  // ==========================================
  {
    id: 'kb-tomateiro-cereja',
    commonName: 'Tomateiro-cereja',
    scientificName: 'Solanum lycopersicum var. cerasiforme',
    family: 'Solanaceae',
    category: 'horta',
    categoryLabel: 'Horta',
    imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1000&q=80',
    description: 'A grande estrela da horta em família! Produz cachos abundantes de tomatinhos doces e perfumados que as crianças adoram colher e comer direto do pé.',
    nativeHabitat: 'Regiões andinas da América do Sul',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno (5-6h diárias)',
    wateringFrequency: 'A cada 2 a 3 dias',
    growthTime: '65 a 85 dias para colher',
    kidTip: 'Ensine a criança a "fazer cócegas" suaves nas flores amarelas com a ponta do dedo para ajudar a polinizar e formar tomatinhos!',
    funFacts: [
      'Botanicamente, o tomate não é legume e sim uma fruta rica em licopeno e vitamina C.',
      'O cheiro característico do tomateiro fica nos dedos por causa de pequenas glândulas protetoras nas folhas.',
      'Plantar manjericão ao lado do tomateiro ajuda a repelir pragas e melhora o sabor dos frutos.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 a 3 dias (ou diária no calor forte)',
        summary: 'Mantenha o solo úmido sem encharcar.',
        details: 'Regue diretamente na terra perto do caule, nunca nas folhas, para evitar fungos.',
        signsOfUnderWatering: 'Folhas murchas e flores abortando.',
        signsOfOverWatering: 'Folhas amareladas na base e frutos rachando.'
      },
      light: {
        requirement: 'Sol Pleno (Mínimo 5 a 6 horas diárias de sol direto)',
        summary: 'Adora luz solar direta e calor para amadurecer os frutos.',
        details: 'Posicione no local mais ensolarado do quintal ou varanda.',
        directSunTolerance: 'Altíssima'
      },
      soilAndPotting: {
        mixType: 'Terra vegetal fértil, rica em húmus de minhoca e perlita.',
        drainageNeeds: 'Excelente drenagem em vaso com furos e argila expandida.',
        repottingSchedule: 'Transplante para vaso de pelo menos 15 a 20 litros quando atingir 10 cm.'
      },
      temperatureAndHumidity: {
        tempRange: '18°C a 28°C',
        humidityNeeds: 'Moderada (50% a 70%)',
        coldTolerance: 'Sensível a geadas e frio abaixo de 12°C.',
        humidityTips: 'Boa ventilação previne fungos nas folhas.'
      },
      fertilizing: {
        schedule: 'A cada 15 a 20 dias durante a floração',
        fertilizerType: 'Adubo orgânico rico em fósforo e potássio (húmus, cinzas de madeira ou farinha de ossos).',
        winterCare: 'Em regiões frias, proteja dos ventos invernais.'
      },
      pruningAndMaintenance: {
        tips: [
          'Prenda um tutor (estaca de bambu) para o caule não tombar com o peso dos tomates.',
          'Retire os brotinhos laterais axilares ("ladrões") com os dedos.',
          'Colha os tomatinhos bem vermelhos cortando o cabinho suavemente.'
        ],
        propagationMethod: 'Por sementes (germinam em 5 a 8 dias) ou estaquia de galho.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Frutos maduros são inofensivos; folhas e ramos verdes contêm solanina e não devem ser ingeridos por pets.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Pico de crescimento, floração e colheita abundante.',
        fallWinter: 'Final de ciclo em áreas frias; em locais quentes produz o ano todo.'
      }
    }
  },
  {
    id: 'kb-morango',
    commonName: 'Morango',
    scientificName: 'Fragaria × ananassa',
    family: 'Rosaceae',
    category: 'horta',
    categoryLabel: 'Horta',
    imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=80',
    description: 'Doce, visualmente encantador e fácil de cultivar em vasos suspensos ou jardineiras. As crianças adoram acompanhar o fruto mudando de verde para vermelho vivo.',
    nativeHabitat: 'Híbrido de espécies silvestres das Américas',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno (4-6h diárias)',
    wateringFrequency: 'A cada 1 a 2 dias',
    growthTime: '60 a 90 dias após o plantio da muda',
    kidTip: 'Coloque uma caminha de palha seca ou casca de pinus embaixo dos moranguinhos para que eles não toquem na terra úmida enquanto amadurecem!',
    funFacts: [
      'O morango não é uma baga: os pontinhos amarelos por fora são os verdadeiros frutos secos da planta, chamados aquênios!',
      'Pertence à família das rosas (Rosaceae), por isso tem flores delicadas e perfumadas.',
      'Produz "estolhos" (raminhos rasteiros) que parecem perninhas esticadas dando origem a novos bebês morangueiros.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 1 a 2 dias',
        summary: 'Mantenha a terra fresca e úmida, nunca empapada.',
        details: 'Molhe a terra ao redor da raiz, evitando molhar o topo da coroa e os frutos.',
        signsOfUnderWatering: 'Folhas murchas e frutos pequenos e ressecados.',
        signsOfOverWatering: 'Coroa apodrecida e fungos cinzentos nos frutos.'
      },
      light: {
        requirement: 'Sol Pleno ou Meia-Sombra com boa luminosidade',
        summary: 'Precisa de luz para adoçar os morangos.',
        details: 'Varandas com sol da manhã são perfeitas para jardineiras de morango.',
        directSunTolerance: 'Alta'
      },
      soilAndPotting: {
        mixType: 'Substrato leve, arenoso e levemente ácido, rico em matéria orgânica.',
        drainageNeeds: 'Excelente, fundamental não reter água parada na coroa.',
        repottingSchedule: 'Vasos ou calhas de 15 a 20 cm de profundidade são suficientes.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 25°C',
        humidityNeeds: 'Moderada (50% a 70%)',
        coldTolerance: 'Resiste bem a temperaturas amenas e invernos brandos.',
        humidityTips: 'Boa aeração entre as plantas evita mofo cinzento (Botrytis).'
      },
      fertilizing: {
        schedule: 'A cada 20 dias com fertilizante orgânico rico em potássio',
        fertilizerType: 'Húmus de minhoca e farinha de casca de banana.',
        winterCare: 'Remova folhas secas para estimular nova brotação na primavera.'
      },
      pruningAndMaintenance: {
        tips: [
          'Corte folhas velhas e secas na base da planta.',
          'Se não quiser novas mudas, pode os estolhos para a energia ir para os frutos.',
          'Colha com uma tesoura pequena cortando 1 cm acima da sépala verde.'
        ],
        propagationMethod: 'Por estolhos enraizados em pequenos copinhos com terra.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Morangos frescos são seguros e adorados por muitos cães como petisco saudável.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Floração e formação dos frutos doces.',
        fallWinter: 'Dormência e emissão de estolhos para novas mudas.'
      }
    }
  },
  {
    id: 'kb-pimentao',
    commonName: 'Pimentão Doce',
    scientificName: 'Capsicum annuum',
    family: 'Solanaceae',
    category: 'horta',
    categoryLabel: 'Horta',
    imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1000&q=80',
    description: 'Cores vibrantes, sabor suave e folhas vistosas. Um vegetal excelente para mostrar como o fruto começa verde e depois se transforma em amarelo, laranja ou vermelho conforme amadurece.',
    nativeHabitat: 'América Central e norte da América do Sul',
    difficultyLevel: 'Moderado',
    lightRequirement: 'Sol Pleno (5h+ diárias)',
    wateringFrequency: 'A cada 2 a 3 dias',
    growthTime: '80 a 100 dias até a colheita',
    kidTip: 'Faça um diário de cores: marque em um caderninho o dia em que o pimentão começou verde e os dias que levou para virar vermelho ou amarelo brilhante!',
    funFacts: [
      'Pimentões verdes, amarelos e vermelhos podem ser da mesma variedade em diferentes estágios de maturação.',
      'Pimentões vermelhos maduros contêm três vezes mais vitamina C que uma laranja!',
      'Ao contrário das pimentas picantes, o pimentão não possui capsaicina ardida, sendo suave e doce.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 a 3 dias',
        summary: 'Regas regulares e profundas, evitando solo encharcado.',
        details: 'Solo ressecado durante a frutificação pode causar podridão apical nos frutos.',
        signsOfUnderWatering: 'Murcha nas folhas e queda precoce de flores.',
        signsOfOverWatering: 'Amarelecimento das folhas inferiores e raízes sufocadas.'
      },
      light: {
        requirement: 'Sol Pleno direto',
        summary: 'Ama dias quentes e ensolarados.',
        details: 'Precisa de bastante luminosidade para sustentar frutos graúdos.',
        directSunTolerance: 'Altíssima'
      },
      soilAndPotting: {
        mixType: 'Substrato fofo e drenável rico em matéria orgânica e cálcio.',
        drainageNeeds: 'Boa furação no vaso de pelo menos 15 a 20 litros.',
        repottingSchedule: 'Transplante da muda quando apresentar 4 folhas definitivas.'
      },
      temperatureAndHumidity: {
        tempRange: '20°C a 30°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Muito sensível ao frio e ventos fortes.',
        humidityTips: 'Espaçamento adequado mantém a planta arejada.'
      },
      fertilizing: {
        schedule: 'Quinzenal após o aparecimento das primeiras flores',
        fertilizerType: 'Adubo rico em fósforo, potássio e casca de ovo triturada (cálcio).',
        winterCare: 'Cultive preferencialmente nas estações quentes.'
      },
      pruningAndMaintenance: {
        tips: [
          'Prenda a planta a uma estaca para que o peso dos pimentões não quebre os galhos.',
          'Pince a primeira flor central para estimular galhos mais fortes e colheitas maiores.',
          'Colha cortando o talo com tesoura afiada.'
        ],
        propagationMethod: 'Por sementes retiradas de pimentões orgânicos maduros.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Fruto inofensivo; plantas da família Solanaceae têm folhagem verde não recomendada para pets.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Período ideal de plantio, floração e colheita.',
        fallWinter: 'Diminuição da produção com noites mais frias.'
      }
    }
  },
  {
    id: 'kb-minicenoura',
    commonName: 'Minicenoura de Vaso',
    scientificName: 'Daucus carota subsp. sativus',
    family: 'Apiaceae',
    category: 'horta',
    categoryLabel: 'Horta',
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=1000&q=80',
    description: 'Uma das maiores alegrias da jardinagem infantil! As cenouras crescem escondidas sob a terra fofa, e puxá-las pelas folhas na colheita é como encontrar um tesouro alaranjado.',
    nativeHabitat: 'Eurásia e bacia do Mediterrâneo',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno ou Meia-Sombra (4h+)',
    wateringFrequency: 'A cada 2 dias (solo úmido)',
    growthTime: '65 a 75 dias para colheita',
    kidTip: 'No dia da colheita, deixe a criança segurar a base das folhas verdes e puxar com firmeza: a surpresa de ver o tamanho da cenoura saindo da terra é inesquecível!',
    funFacts: [
      'Originalmente, as primeiras cenouras cultivadas há milhares de anos eram roxas e amarelas; a laranja surgiu na Holanda!',
      'As folhas verdes da cenoura também são comestíveis e ficam deliciosas em pestos e bolinhos.',
      'Cenouras precisam de terra bem solta, sem pedrinhas; se encontrarem um obstáculo, podem crescer com formato engraçado de duas perninhas!'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 1 a 2 dias',
        summary: 'Mantenha o solo uniformemente úmido para as raízes crescerem retas e crocantes.',
        details: 'Regas irregulares podem fazer as cenouras racharem.',
        signsOfUnderWatering: 'Rama verde murcha e raízes duras e amargas.',
        signsOfOverWatering: 'Raízes rachadas e apodrecimento sob o solo.'
      },
      light: {
        requirement: 'Sol Pleno a Meia-sombra',
        summary: 'Pelo menos 4 horas diárias de luz para fotossíntese ativa.',
        details: 'Pode ser cultivada em jardineiras profundas de parapeito de janela.',
        directSunTolerance: 'Média a Alta'
      },
      soilAndPotting: {
        mixType: 'Substrato arenoso, bem solto, peneirado e sem pedrinhas ou torrões duros.',
        drainageNeeds: 'Essencial. Use vasos ou caixas com no mínimo 25 a 30 cm de profundidade.',
        repottingSchedule: 'Não tolera transplante: semeie direto no vaso definitivo.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 24°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Tolera bem clima fresco e outono ameno.',
        humidityTips: 'Solo coberto com folhas secas trituradas conserva a umidade.'
      },
      fertilizing: {
        schedule: 'Evite excesso de nitrogênio (que gera muitas folhas e cenoura pequena); prefira composto com fósforo.',
        fertilizerType: 'Cinzas de madeira bem diluídas e farinha de ossos.',
        winterCare: 'Desenvolve-se muito bem no outono e inverno ameno.'
      },
      pruningAndMaintenance: {
        tips: [
          'Faça o "desbaste" (raleio): quando as plantinhas tiverem 5 cm, retire mudinhas extras deixando 4 a 5 cm de espaço entre cada uma.',
          'Cubra os ombros das cenouras com terra se começarem a aparecer para não ficarem verdes.',
          'Colha quando o topo da cenoura rente à terra tiver cerca de 2 cm de diâmetro.'
        ],
        propagationMethod: 'Exclusivamente por sementes no local definitivo.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% segura e saudável; cães adoram roer cenouras cruas como escovinha de dente natural.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Cultivo em locais frescos ou meia-sombra.',
        fallWinter: 'Melhor época de cultivo em regiões de clima quente.'
      }
    }
  },
  {
    id: 'kb-alface',
    commonName: 'Alface Mimosa / Crespa',
    scientificName: 'Lactuca sativa',
    family: 'Asteraceae',
    category: 'horta',
    categoryLabel: 'Horta',
    imageUrl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=1000&q=80',
    description: 'Crescimento rápido e recompensador! Uma folhagem verde e crocante que permite colheita contínua folha por folha, mostrando às crianças como uma sementinha vira salada fresca em poucas semanas.',
    nativeHabitat: 'Região do Mediterrâneo oriental',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol da manhã ou Meia-Sombra (3-5h)',
    wateringFrequency: 'Diariamente (solo sempre úmido)',
    growthTime: '35 a 50 dias para colher',
    kidTip: 'Em vez de arrancar o pé inteiro, ensine a criança a colher apenas as folhas externas maiores. O centro continuará crescendo e dando folhas novas toda semana!',
    funFacts: [
      'Alfaces são cultivadas pela humanidade há mais de 4.500 anos, com registros em tumbas do Antigo Egito.',
      'Possuem mais de 95% de água em sua composição e contêm lactucina, substância natural que ajuda no relaxamento.',
      'Você pode colocar a base de um talo de alface em um pires com água e ver folhas novas brotarem do centro em 3 dias!'
    ],
    careInstructions: {
      watering: {
        frequency: 'Diariamente em dias quentes',
        summary: 'Solo sempre úmido, fresco e aerado.',
        details: 'Regue de manhã cedo ou no fim da tarde, direcionando a água para a terra ao redor.',
        signsOfUnderWatering: 'Folhas caídas, moles e com sabor amargo.',
        signsOfOverWatering: 'Apodrecimento do colo e folhas basais meladas.'
      },
      light: {
        requirement: 'Sol suave da manhã ou Meia-sombra luminosa',
        summary: 'Sol muito quente da tarde faz a alface "pendoar" (florescer cedo e amargar).',
        details: 'Ideal para parapeitos e varandas com luz indireta filtrada.',
        directSunTolerance: 'Média (prefere clima ameno)'
      },
      soilAndPotting: {
        mixType: 'Substrato leve, fofo e rico em composto orgânico e húmus de minhoca.',
        drainageNeeds: 'Alta drenagem; vasos ou jardineiras de 15 cm de profundidade são perfeitos.',
        repottingSchedule: 'Pode ser semeada em sementeiras e transplantada com 4 folhinhas.'
      },
      temperatureAndHumidity: {
        tempRange: '14°C a 22°C',
        humidityNeeds: 'Moderada a Alta',
        coldTolerance: 'Boa tolerância ao frio brando; não gosta de calor excessivo acima de 30°C.',
        humidityTips: 'Mantenha o vaso protegido de ventos secos.'
      },
      fertilizing: {
        schedule: 'A cada 15 dias com adubo orgânico suave rico em nitrogênio',
        fertilizerType: 'Chá de húmus de minhoca bem diluído.',
        winterCare: 'Excelente produção durante o outono e inverno.'
      },
      pruningAndMaintenance: {
        tips: [
          'Colha as folhas mais externas deixando o miolo crescer livremente.',
          'Se o centro esticar em forma de torre, a planta vai florescer: aproveite as últimas folhas.',
          'Mantenha a terra livre de ervas daninhas competidoras.'
        ],
        propagationMethod: 'Por sementes que germinam em 3 a 5 dias.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Totalmente atóxica; pequenos pedaços são seguros para cães e pequenos roedores.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Prefira locais com sombra parcial e regas diárias.',
        fallWinter: 'Clima ideal para colheitas exuberantes e crocantes.'
      }
    }
  },

  // ==========================================
  // ERVAS AROMÁTICAS (6 espécies)
  // ==========================================
  {
    id: 'kb-manjericao-italiano',
    commonName: 'Manjericão Italiano',
    scientificName: 'Ocimum basilicum',
    family: 'Lamiaceae',
    category: 'ervas',
    categoryLabel: 'Ervas',
    imageUrl: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=1000&q=80',
    description: 'Aroma inconfundível, folhas tenras e sabor fresco. Indispensável na cozinha para preparar molhos de tomate e pizzas com as crianças, perfumando toda a casa.',
    nativeHabitat: 'Regiões tropicais da África Central e Sudeste Asiático',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno ou Meia-Sombra (4-5h)',
    wateringFrequency: 'A cada 1 a 2 dias',
    growthTime: '40 a 50 dias para início da colheita',
    kidTip: 'A "mágica da água": corte um galhinho de 10 cm e coloque em um copo com água na janela. Em 5 dias, as crianças vão ver raízes brancas compridas nascendo diante dos olhos!',
    funFacts: [
      'O nome vem do grego "basilikos", que significa real ou digno de reis.',
      'Suas folhas liberam mais perfume quando tocadas suavemente do que quando esmagadas com força.',
      'Plantar manjericão ao lado de tomateiros espanta moscas-brancas e realça o sabor dos tomates.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 1 a 2 dias',
        summary: 'Regue assim que a superfície da terra começar a secar.',
        details: 'O manjericão avisa quando tem sede murchando rapidamente, mas revive em poucas horas após a rega.',
        signsOfUnderWatering: 'Folhas caídas e macias.',
        signsOfOverWatering: 'Folhas amareladas e caules escurecidos na base.'
      },
      light: {
        requirement: 'Sol Pleno a Meia-sombra bem iluminada',
        summary: 'Quanto mais sol recebe, mais óleos essenciais aromáticos produz.',
        details: 'Mantenha na janela mais ensolarada da cozinha ou na varanda.',
        directSunTolerance: 'Alta'
      },
      soilAndPotting: {
        mixType: 'Substrato leve, rico em húmus com boa porcentagem de perlita ou areia.',
        drainageNeeds: 'Excelente drenagem para não encharcar raízes finas.',
        repottingSchedule: 'Vasos de 3 a 5 litros por muda garantem touceiras fartas.'
      },
      temperatureAndHumidity: {
        tempRange: '20°C a 30°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Muito sensível ao frio e geadas.',
        humidityTips: 'Prefere locais ventilados.'
      },
      fertilizing: {
        schedule: 'Mensalmente nas estações quentes',
        fertilizerType: 'Biofertilizante orgânico suave ou chá de húmus.',
        winterCare: 'Reduza regas no inverno e proteja de correntes de ar gelado.'
      },
      pruningAndMaintenance: {
        tips: [
          'Poda de beliscão: pode a pontinha dos galhos para o manjericão virar uma touceira redonda.',
          'Corte as flores assim que surgirem para as folhas continuarem doces e macias.',
          'Colha sempre as folhas do topo para estimular novos ramos.'
        ],
        propagationMethod: 'Por estaquia na água (enraizamento em 5 a 7 dias).'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% seguro para cães, gatos e crianças.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento exuberante e colheitas frequentes.',
        fallWinter: 'Crescimento mais lento; preserve do frio intenso.'
      }
    }
  },
  {
    id: 'kb-hortela',
    commonName: 'Hortelã-comum',
    scientificName: 'Mentha spicata',
    family: 'Lamiaceae',
    category: 'ervas',
    categoryLabel: 'Ervas',
    imageUrl: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=1000&q=80',
    description: 'Refrescante, vigorosa e super fácil de cuidar. Ideal para fazer chás quentinhos, sucos de abacaxi com hortelã e aromatizar águas em dias de sol.',
    nativeHabitat: 'Bacia do Mediterrâneo e Europa',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Meia-Sombra ou Sol Pleno (3-5h)',
    wateringFrequency: 'A cada 1 a 2 dias (ama umidade)',
    growthTime: 'Pronta para colher em 30 dias',
    kidTip: 'Peça para a criança esfregar uma folhinha entre as duas mãos e cheirar: o mentol fresco desperta o olfato e rende um momento sensorial mágico!',
    funFacts: [
      'A hortelã cresce tão rápido através de raízes subterrâneas (rizomas) que é melhor plantá-la em vaso separado para não dominar as outras plantas.',
      'O aroma do mentol afasta formigas e mosquitos naturalmente do ambiente.',
      'Na Grécia antiga, esfregar folhas de hortelã nas mesas de banquete era sinal de hospitalidade e boas-vindas.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 1 a 2 dias',
        summary: 'Gosta de solo constantemente úmido, fresco como a beira de um riacho.',
        details: 'Nunca deixe a terra secar totalmente.',
        signsOfUnderWatering: 'Folhas murchas e pontas secas.',
        signsOfOverWatering: 'Solo com cheiro de mofo e folhas inferiores caídas.'
      },
      light: {
        requirement: 'Meia-sombra iluminada ou sol da manhã',
        summary: 'Desenvolve-se muito bem com claridade indireta abundante.',
        details: 'Evite sol escaldante do meio-dia que queima as folhas tenras.',
        directSunTolerance: 'Média'
      },
      soilAndPotting: {
        mixType: 'Terra orgânica rica, fresca e fofa com húmus de minhoca.',
        drainageNeeds: 'Boa drenagem, mantendo a umidade no substrato.',
        repottingSchedule: 'Plante em vaso largo e exclusivo com 20 cm de profundidade.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 26°C',
        humidityNeeds: 'Alta (ama ambientes úmidos)',
        coldTolerance: 'Muito resistente ao frio; rebrota na primavera com força total.',
        humidityTips: 'Borrife água nas folhas em dias secos.'
      },
      fertilizing: {
        schedule: 'A cada 30 a 45 dias',
        fertilizerType: 'Composto orgânico suave na superfície.',
        winterCare: 'Pode os ramos rentes no início do inverno para rejuvenescer a planta.'
      },
      pruningAndMaintenance: {
        tips: [
          'Pode com tesoura colhendo ramos inteiros para estimular novos brotos na base.',
          'Retire folhas secas para deixar o vaso limpo e ventilado.',
          'Mantenha em vaso individual para não sufocar plantas vizinhas.'
        ],
        propagationMethod: 'Divisão de rizomas ou galhos colocados na água.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Segura em pequenas quantidades culinárias; evite óleos essenciais puros concentrados perto de pets.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento ultra rápido e folhagem densa.',
        fallWinter: 'Redução natural da folhagem e rebrota vigorosa ao esquentar.'
      }
    }
  },
  {
    id: 'kb-alecrim',
    commonName: 'Alecrim do Campo',
    scientificName: 'Salvia rosmarinus',
    family: 'Lamiaceae',
    category: 'ervas',
    categoryLabel: 'Ervas',
    imageUrl: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=1000&q=80',
    description: 'Resistente, perfumado e com folhas em formato de agulhinhas delicadas. Lembra um mini pinheirinho de Natal e adora sol pleno e pouca água.',
    nativeHabitat: 'Encostas rochosas da bacia do Mediterrâneo',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno (5-6h diárias)',
    wateringFrequency: 'A cada 4 a 6 dias (apenas quando seco)',
    growthTime: 'Perene; colheita contínua por muitos anos',
    kidTip: 'No final do ano, use o vasinho de alecrim como uma "mini árvore de Natal" decorando a jardineira com as crianças e colhendo raminhos para batatas assadas!',
    funFacts: [
      'Na antiguidade, estudantes colocavam ramos de alecrim nos cabelos porque o aroma ajuda na concentração e na memória.',
      'Na primavera, produz florzinhas azuladas minúsculas que atraem muitas abelhas polinizadoras amigas.',
      'O nome em latim "Ros marinus" significa "Orvalho do Mar", pois crescia nas falésias costeiras perto do mar.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 4 a 6 dias',
        summary: 'Deixe o solo secar completamente entre as regas. Prefere a seca ao excesso de água!',
        details: 'O maior erro é regar demais. Coloque o dedo na terra: só regue se estiver totalmente seca.',
        signsOfUnderWatering: 'Agulhas secas e quebradiças caindo.',
        signsOfOverWatering: 'Base dos galhos escurecendo e mofo branco no solo.'
      },
      light: {
        requirement: 'Sol Pleno direto obrigatório',
        summary: 'Precisa de muito sol direto para manter os óleos aromáticos concentrados.',
        details: 'Posicione no ponto mais ensolarado da casa ou no jardim externo.',
        directSunTolerance: 'Altíssima'
      },
      soilAndPotting: {
        mixType: 'Solo arenoso, bem drenado e alcalino (misture terra comum com areia de construção lavada).',
        drainageNeeds: 'Máxima drenagem indispensável. Use vasos de barro com furos generosos.',
        repottingSchedule: 'Pode ficar no mesmo vaso por 2 a 3 anos.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 30°C',
        humidityNeeds: 'Baixa a Moderada (não gosta de ar abafado)',
        coldTolerance: 'Muito resistente tanto ao calor quanto a noites frias.',
        humidityTips: 'Prefere locais bem ventilados e arejados.'
      },
      fertilizing: {
        schedule: 'A cada 3 a 4 meses com pequenas doses de adubo orgânico',
        fertilizerType: 'Farinha de ossos ou casca de ovo triturada; não necessita de adubação pesada.',
        winterCare: 'Reduza ainda mais as regas no inverno.'
      },
      pruningAndMaintenance: {
        tips: [
          'Pode as pontas dos ramos para colher na cozinha e estimular ramificação compacta.',
          'Nunca corte a madeira velha lenhosa perto do solo sem deixar folhas verdes acima.',
          'Lave os raminhos antes de temperar assados e pães caseiros.'
        ],
        propagationMethod: 'Por estaquia de ponteiros semilenhosos em substrato arenoso.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% seguro para animais domésticos e humanos.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Floração azul e brotação de novos raminhos tenros.',
        fallWinter: 'Resiste perfeitamente e mantém a folhagem verde o ano inteiro.'
      }
    }
  },
  {
    id: 'kb-cebolinha',
    commonName: 'Cebolinha Verde',
    scientificName: 'Allium schoenoprasum',
    family: 'Amaryllidaceae',
    category: 'ervas',
    categoryLabel: 'Ervas',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
    description: 'Folhas tubulares ocas, verdes e saborosas que crescem a toda velocidade. As crianças adoram cortar com tesoura de ponta redonda como se estivessem dando um corte de cabelo na planta!',
    nativeHabitat: 'Regiões temperadas da Europa, Ásia e América do Norte',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno ou Meia-Sombra (4h+)',
    wateringFrequency: 'A cada 2 dias',
    growthTime: 'Colheita contínua a cada 10-15 dias',
    kidTip: 'Brincadeira do "cabelereiro botânico": use uma tesourinha infantil para aparar as hastes cerca de 3 cm acima da terra. Em 4 dias o cabelinho verde já terá crescido de novo!',
    funFacts: [
      'Na primavera, a cebolinha produz lindos pompons de flores roxas comestíveis que têm sabor suave de cebola.',
      'Você pode replantar as raízes brancas de cebolinhas compradas na feira: basta colocar na terra e elas brotam sozinhas!',
      'É rica em vitaminas A e C e ajuda a manter insetos nocivos afastados de hortaliças vizinhas.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 dias',
        summary: 'Mantenha a terra úmida sem poças.',
        details: 'Regue na base das touceiras.',
        signsOfUnderWatering: 'Pontas das hastes amarelando e secando.',
        signsOfOverWatering: 'Bulbos apodrecendo e cheiro forte de terra úmida.'
      },
      light: {
        requirement: 'Sol Pleno a Meia-sombra',
        summary: 'Desenvolve-se com 4 horas ou mais de sol diário.',
        details: 'Jardineiras de parapeito de janela recebendo sol matinal são ideais.',
        directSunTolerance: 'Alta'
      },
      soilAndPotting: {
        mixType: 'Terra vegetal rica em matéria orgânica com boa aeração.',
        drainageNeeds: 'Vaso com boa furação e camada de brita ou argila expandida.',
        repottingSchedule: 'Divida as touceiras a cada 1 ou 2 anos para renovar o vigor.'
      },
      temperatureAndHumidity: {
        tempRange: '16°C a 26°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Muito resistente a quedas de temperatura.',
        humidityTips: 'Boa ventilação mantém as hastes retas e firmes.'
      },
      fertilizing: {
        schedule: 'A cada 25 a 30 dias com húmus de minhoca',
        fertilizerType: 'Adubo orgânico suave.',
        winterCare: 'Mantém-se verde o ano todo em quase todas as regiões do Brasil.'
      },
      pruningAndMaintenance: {
        tips: [
          'Corte cerca de 3 a 5 cm acima do solo ao colher.',
          'Colha as hastes mais grossas e externas primeiro.',
          'Remova palhas e folhas velhas secas na base da touceira.'
        ],
        propagationMethod: 'Por sementes, divisão de touceira ou reaproveitamento de raízes da feira.'
      },
      toxicity: {
        toxicToPets: true,
        petDetails: 'Plantas do gênero Allium (alho, cebola e cebolinha) contêm compostos que podem causar anemia em cães e gatos se ingeridas em quantidade; mantenha fora do alcance de pets.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento veloz e possíveis flores roxas tipo pompom.',
        fallWinter: 'Produção contínua e estável.'
      }
    }
  },
  {
    id: 'kb-salsinha',
    commonName: 'Salsinha Fresca',
    scientificName: 'Petroselinum crispum',
    family: 'Apiaceae',
    category: 'ervas',
    categoryLabel: 'Ervas',
    imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1000&q=80',
    description: 'Parceira inseparável da cebolinha formando o tradicional cheiro-verde. Folhas recortadas verde-escuras, repletas de frescor e ricas em ferro e vitamina C para a comida caseira.',
    nativeHabitat: 'Bacia do Mediterrâneo Central e Ocidental',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Meia-Sombra ou Sol Pleno (4h)',
    wateringFrequency: 'A cada 2 dias',
    growthTime: '60 a 70 dias a partir da semente',
    kidTip: 'Ensine a criança a colher os galhinhos de salsa cortando perto da base com tesoura. O aroma fresco que sobe é perfeito para convidar os pequenos a temperar a salada!',
    funFacts: [
      'As sementes de salsa são conhecidas na botânica por demorarem até 3 semanas para germinar; um teste clássico de paciência!',
      'Mergulhar as sementes em água morna por 12 horas antes do plantio reduz o tempo de espera pela metade.',
      'Suas flores atraem borboletas da espécie cauda-de-andorinha, cujas lagartixas adoram suas folhas e viram lindas borboletas pretas e amarelas.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 dias',
        summary: 'Gosta de terra úmida, fresca e bem drenada.',
        details: 'Evite que o solo resseque totalmente no calor.',
        signsOfUnderWatering: 'Folhas murchas e amareladas nas bordas.',
        signsOfOverWatering: 'Talos moles e escurecimento na raiz.'
      },
      light: {
        requirement: 'Sol da manhã ou Meia-sombra luminosa',
        summary: 'Prefere sol mais brando; sol causticante pode desbotar a folhagem.',
        details: 'Perfeita para jardineiras na sacada ou varanda.',
        directSunTolerance: 'Média'
      },
      soilAndPotting: {
        mixType: 'Substrato orgânico solto e fértil, rico em húmus.',
        drainageNeeds: 'Vaso com pelo menos 20 cm de profundidade para a raiz pivotante.',
        repottingSchedule: 'Pode ser cultivada por até 2 anos antes de renovar o vaso.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 25°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Muito tolerante ao clima ameno e frio.',
        humidityTips: 'Mantenha a terra coberta com palhinha para reter umidade.'
      },
      fertilizing: {
        schedule: 'Mensalmente com adubo orgânico',
        fertilizerType: 'Húmus de minhoca ou biofertilizante líquido suave.',
        winterCare: 'Mantém-se produtiva mesmo em meses frios.'
      },
      pruningAndMaintenance: {
        tips: [
          'Colha sempre os talos externos perto da base para o centro continuar brotando.',
          'Não arranque apenas as folhinhas deixando o talo pelado.',
          'Retire hastes florais se quiser prolongar a produção de folhas.'
        ],
        propagationMethod: 'Por sementes (deixe de molho na água morna antes de plantar).'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Segura em pequenas quantidades; não tóxica.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento e brotação exuberante.',
        fallWinter: 'Produção vigorosa e folhas crocantes no clima fresco.'
      }
    }
  },
  {
    id: 'kb-oregano',
    commonName: 'Orégano',
    scientificName: 'Origanum vulgare',
    family: 'Lamiaceae',
    category: 'ervas',
    categoryLabel: 'Ervas',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
    description: 'O cheirinho oficial da noite da pizza! Pequenas folhas aveludadas muito perfumadas que podem ser colhidas frescas ou secas à sombra para guardar em vidrinhos feitos em família.',
    nativeHabitat: 'Regiões montanhosas do Mediterrâneo',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno (4-6h diárias)',
    wateringFrequency: 'A cada 3 a 4 dias',
    growthTime: '45 a 60 dias para primeira colheita',
    kidTip: 'Colha ramos com as crianças, amarre com um barbante e pendure de cabeça para baixo em local arejado. Em 7 dias vocês terão orégano sequinho para colocar na pizza caseira!',
    funFacts: [
      'A palavra "orégano" vem do grego e significa "alegria da montanha".',
      'O orégano seco costuma ter sabor ainda mais marcante que as folhas frescas devido à concentração dos óleos timol e carvacrol.',
      'Produz minúsculas flores rosadas muito apreciadas por joaninhas e abelhas polinizadoras.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 3 a 4 dias',
        summary: 'Aguarde o solo secar antes de regar novamente.',
        details: 'Tolera pequenas secas; não gosta de terra encharcada.',
        signsOfUnderWatering: 'Folhas opacas e pontas dos raminhos caídas.',
        signsOfOverWatering: 'Folhas inferiores pretas e raiz apodrecida.'
      },
      light: {
        requirement: 'Sol Pleno direto',
        summary: 'Ama dias ensolarados e quentes.',
        details: 'Posicione em local que receba muito sol direto.',
        directSunTolerance: 'Altíssima'
      },
      soilAndPotting: {
        mixType: 'Substrato leve, poroso e arenoso com excelente aeração.',
        drainageNeeds: 'Vaso com boa furação e substrato bem drenante.',
        repottingSchedule: 'Pode ser mantido em jardineiras pequenas ou vasos de 3 litros.'
      },
      temperatureAndHumidity: {
        tempRange: '18°C a 28°C',
        humidityNeeds: 'Baixa a Moderada',
        coldTolerance: 'Resiste a geadas leves quando bem estabelecido.',
        humidityTips: 'Evite locais abafados sem circulação de ar.'
      },
      fertilizing: {
        schedule: 'A cada 2 meses com adubo orgânico moderado',
        fertilizerType: 'Húmus ou composto vegetal.',
        winterCare: 'Reduza as regas no inverno.'
      },
      pruningAndMaintenance: {
        tips: [
          'Pode as pontas com frequência para formar uma touceira cheia.',
          'Colha antes da floração para aproveitar o maior teor de aromas.',
          'Desidrate os raminhos pendurados à sombra para conservar por meses.'
        ],
        propagationMethod: 'Por estaquia de raminhos ou divisão da touceira.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Totalmente seguro na alimentação humana e inofensivo a pets em doses culinárias.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento rápido e pequenas florzinhas lilases.',
        fallWinter: 'Folhagem perene e resistente ao frio.'
      }
    }
  },

  // ==========================================
  // FLORES (4 espécies)
  // ==========================================
  {
    id: 'kb-girassol-anao',
    commonName: 'Girassol-anão (Teddy Bear)',
    scientificName: 'Helianthus annuus',
    family: 'Asteraceae',
    category: 'flores',
    categoryLabel: 'Flores',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1000&q=80',
    description: 'Um raio de sol no vaso! Diferente do girassol gigante de fazenda, a variedade anã cabe perfeitamente em vasos e jardineiras, produzindo flores amarelas felpudas e radiantes que fascinam as crianças.',
    nativeHabitat: 'América do Norte e América Central',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno (6h+ diárias)',
    wateringFrequency: 'A cada 2 dias',
    growthTime: '60 a 75 dias da semente à flor',
    kidTip: 'Observe com a criança de manhã e no fim da tarde: a florzinha jovem vira a cabeça ao longo do dia para acompanhar o caminho do sol pelo céu (o famoso heliotropismo)!',
    funFacts: [
      'A flor do girassol é na verdade uma "inflorescência": milhares de florzinhas minúsculas reunidas no mesmo disco central!',
      'Suas sementes são ricas em óleos saudáveis e podem ser torradas ou oferecidas a passarinhos livres no quintal.',
      'Girassóis jovens giram do leste para o oeste durante o dia e se viram de volta para o leste durante a noite esperando o amanhecer.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 dias',
        summary: 'Regas generosas na raiz, mantendo o solo úmido durante o crescimento rápido.',
        details: 'Não encharque o pratinho, mas não deixe a terra secar totalmente.',
        signsOfUnderWatering: 'Folhas largas murchas e caule dobrado.',
        signsOfOverWatering: 'Caule amolecido na base e folhas amareladas.'
      },
      light: {
        requirement: 'Sol Pleno obrigatório',
        summary: 'É a planta mais apaixonada pelo sol de todas!',
        details: 'Coloque no ponto mais aberto e ensolarado da varanda ou quintal.',
        directSunTolerance: 'Máxima'
      },
      soilAndPotting: {
        mixType: 'Substrato fértil, rico em húmus de minhoca e bem drenado.',
        drainageNeeds: 'Vaso de 5 a 10 litros com furos de drenagem para acomodar as raízes profundas.',
        repottingSchedule: 'Semeie diretamente no vaso definitivo (não tolera transplante brusco).'
      },
      temperatureAndHumidity: {
        tempRange: '20°C a 32°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Sensível ao frio e geadas.',
        humidityTips: 'Prefere ar livre ventilado.'
      },
      fertilizing: {
        schedule: 'A cada 15 dias durante o crescimento vegetativo',
        fertilizerType: 'Adubo orgânico rico em fósforo e potássio.',
        winterCare: 'Planta anual que completa o ciclo no verão.'
      },
      pruningAndMaintenance: {
        tips: [
          'Prenda a uma estaca se o botão floral ficar muito pesado para o caule.',
          'Quando as flores secarem, deixe as sementes amadurecerem no pé para replantar no ano seguinte.',
          'Evite molhar o botão da flor ao regar.'
        ],
        propagationMethod: 'Por sementes que germinam vigorosamente em 5 a 7 dias.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% seguro para animais de estimação e crianças.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Época de semear, crescer e florescer com máximo esplendor.',
        fallWinter: 'Fim do ciclo anual e colheita das sementes para a próxima primavera.'
      }
    }
  },
  {
    id: 'kb-calendula',
    commonName: 'Calêndula',
    scientificName: 'Calendula officinalis',
    family: 'Asteraceae',
    category: 'flores',
    categoryLabel: 'Flores',
    imageUrl: 'https://images.unsplash.com/photo-1592318696282-364e26ebca52?auto=format&fit=crop&w=1000&q=80',
    description: 'Pétalas comestíveis em tons radiantes de laranja e amarelo dourado. Uma flor medicinal tradicional, amiga da horta, que atrai joaninhas e embeleza saladas e bolos caseiros.',
    nativeHabitat: 'Região do Mediterrâneo e sul da Europa',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno ou Meia-Sombra (4h+)',
    wateringFrequency: 'A cada 2 a 3 dias',
    growthTime: '45 a 60 dias da semente às flores',
    kidTip: 'Colha algumas pétalas alaranjadas bem lavadas com as crianças e polvilhe sobre uma salada de folhas ou um bolo: é uma flor comestível segura, linda e cheia de história!',
    funFacts: [
      'Na botânica popular, as calêndulas são chamadas de "barômetros da chuva": suas flores se fecham quando o ar fica muito úmido antes da chuva chegar!',
      'Muito utilizada na fabricação de pomadas naturais para aliviar picadas de mosquito e irritações na pele de bebês e crianças.',
      'Ajuda a horta funcionando como planta-isca atraindo pulgões para longe dos legumes e trazendo joaninhas benéficas.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 a 3 dias',
        summary: 'Regue quando a terra começar a secar na superfície.',
        details: 'Molhe a terra e evite molhar o miolo das flores abertas.',
        signsOfUnderWatering: 'Flores fechadas e folhas murchas.',
        signsOfOverWatering: 'Fungos brancos (oídio) nas folhas.'
      },
      light: {
        requirement: 'Sol Pleno a Meia-sombra',
        summary: 'Floresce com vigor sob pelo menos 4 horas de sol direto.',
        details: 'Ideal para jardineiras floridas em janelas e canteiros.',
        directSunTolerance: 'Alta'
      },
      soilAndPotting: {
        mixType: 'Solo fértil, leve e bem drenado com composto orgânico.',
        drainageNeeds: 'Boa drenagem; vasos de 3 a 5 litros são ideais.',
        repottingSchedule: 'Semeie em sementeira ou direto no vaso definitivo.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 25°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Excelente tolerância ao clima ameno e frio suave.',
        humidityTips: 'Espaçamento arejado previne doenças fúngicas.'
      },
      fertilizing: {
        schedule: 'A cada 20 dias durante a floração',
        fertilizerType: 'Adubo rico em fósforo (farinha de ossos ou biofertilizante floral).',
        winterCare: 'Floresce lindamente no outono e inverno ameno brasileiro.'
      },
      pruningAndMaintenance: {
        tips: [
          'Retire as flores murchas cortando a haste (deadheading) para estimular o nascimento contínuo de novas flores.',
          'Colha as pétalas pela manhã para uso culinário ou medicinal artesanal.',
          'Deixe algumas flores secarem no final da estação para guardar sementes.'
        ],
        propagationMethod: 'Por sementes em formato de pequenas curvinhas (germinação em 7 a 10 dias).'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% atóxica e benéfica; pétalas comestíveis.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Floração abundante e contínua.',
        fallWinter: 'Desenvolve-se com vigor em climas amenos.'
      }
    }
  },
  {
    id: 'kb-lavanda',
    commonName: 'Lavanda Inglesa',
    scientificName: 'Lavandula angustifolia',
    family: 'Lamiaceae',
    category: 'flores',
    categoryLabel: 'Flores',
    imageUrl: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1000&q=80',
    description: 'Espigas florais lilases com um dos aromas mais calmantes e adorados da natureza. Traz sensação de paz para o lar e ajuda as crianças a relaxarem antes de dormir.',
    nativeHabitat: 'Montanhas secas do Mediterrâneo ocidental',
    difficultyLevel: 'Moderado',
    lightRequirement: 'Sol Pleno (5-6h diárias)',
    wateringFrequency: 'A cada 4 a 6 dias (apenas solo seco)',
    growthTime: 'Perene; floresce na primavera e verão',
    kidTip: 'Faça um sachê de ninar: colha algumas florzinhas de lavanda, coloque dentro de um saquinho de tecido com a criança e deixe perto do travesseiro para um sono tranquilo e perfumado!',
    funFacts: [
      'A palavra lavanda vem do latim "lavare" (lavar), pois os romanos perfumavam as águas de seus banhos medicinais com ela.',
      'O aroma do óleo essencial de lavanda atua diretamente no sistema límbico do cérebro, reduzindo o estresse e a ansiedade.',
      'Suas flores produzem néctar de alta qualidade, gerando um dos méis mais premiados e delicados do mundo.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 4 a 6 dias',
        summary: 'Deixe o substrato secar quase por completo antes de regar.',
        details: 'Lavanda odeia excesso de umidade na raiz: menos água é sempre melhor.',
        signsOfUnderWatering: 'Espigas florais pendendo para baixo e folhas cinzentas opacas.',
        signsOfOverWatering: 'Base apodrecida, caules amolecidos e queda súbita de folhas.'
      },
      light: {
        requirement: 'Sol Pleno rigoroso',
        summary: 'Necessita de calor e luz solar direta para florescer e perfumar.',
        details: 'Coloque no ponto mais ensolarado da janela ou jardim.',
        directSunTolerance: 'Altíssima'
      },
      soilAndPotting: {
        mixType: 'Solo arenoso, bem drenável, com areia grossa e um pouco de calcário.',
        drainageNeeds: 'Máxima drenagem. Use vasos de cerâmica ou barro com furos grandes.',
        repottingSchedule: 'Troque de vaso a cada 2 anos caso as raízes preencham o recipiente.'
      },
      temperatureAndHumidity: {
        tempRange: '15°C a 28°C',
        humidityNeeds: 'Baixa (não gosta de umidade excessiva nem ar abafado)',
        coldTolerance: 'Muito resistente ao frio e geadas.',
        humidityTips: 'Mantenha em local aberto e ventilado.'
      },
      fertilizing: {
        schedule: 'A cada 60 dias com doses suaves de adubo',
        fertilizerType: 'Farinha de ossos ou cinzas; evite adubos ricos em nitrogênio.',
        winterCare: 'Diminua drasticamente as regas no inverno.'
      },
      pruningAndMaintenance: {
        tips: [
          'Pode as hastes florais secas após a florada para manter a touceira redonda.',
          'Nunca corte fundo na madeira velha sem folhas verdes.',
          'Colha as espigas quando as florzinhas da base começarem a se abrir.'
        ],
        propagationMethod: 'Por estaquia de ramos semilenhosos no final do verão.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'A planta in natura é segura; apenas o óleo essencial concentrado puro não deve ser administrado a gatos.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Pico de floração roxa perfumada e visitação de abelhas.',
        fallWinter: 'Dormência e manutenção de folhagem prateada resistente.'
      }
    }
  },
  {
    id: 'kb-amor-perfeito',
    commonName: 'Amor-perfeito',
    scientificName: 'Viola tricolor',
    family: 'Violaceae',
    category: 'flores',
    categoryLabel: 'Flores',
    imageUrl: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=1000&q=80',
    description: 'Pétalas multicoloridas com desenhos que parecem carinhas alegres e expressivas desenhadas pela natureza. Uma flor clássica, comestível e perfeita para alegrar dias frescos de outono e inverno.',
    nativeHabitat: 'Europa e Ásia temperada',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Meia-Sombra ou Sol Amigo (3-4h)',
    wateringFrequency: 'A cada 2 dias',
    growthTime: '50 a 65 dias da semente às flores',
    kidTip: 'Peça para as crianças olharem bem de pertinho para o centro da flor: cada flor parece ter bigodinhos e olhinhos fazendo caretas divertidas e coloridas!',
    funFacts: [
      'As flores de amor-perfeito são 100% comestíveis e muito usadas por confeiteiros para enfeitar bolos finos e docinhos.',
      'O nome em inglês "pansy" vem do francês "pensée" (pensamento), pois presentear com essa flor significava "estou pensando em você".',
      'É uma das poucas flores que prefere temperaturas frias e floresce no outono e inverno, quando outras plantas dormem.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 2 dias',
        summary: 'Mantenha o solo sempre levemente úmido e fresco.',
        details: 'Regue ao redor da planta sem encharcar o miolo floral.',
        signsOfUnderWatering: 'Hastes caídas e pétalas desidratadas.',
        signsOfOverWatering: 'Apodrecimento do colo na junção com o solo.'
      },
      light: {
        requirement: 'Sol suave da manhã ou Meia-sombra luminosa',
        summary: 'Não tolera calor escaldante; floresce melhor no clima fresco.',
        details: 'Excelente para jardineiras em parapeitos voltados para o leste.',
        directSunTolerance: 'Média (prefere clima ameno)'
      },
      soilAndPotting: {
        mixType: 'Substrato orgânico fértil, rico em húmus e bem drenante.',
        drainageNeeds: 'Boa drenagem; vasos de 2 a 3 litros funcionam perfeitamente.',
        repottingSchedule: 'Semeie no final do verão para floradas deslumbrantes no inverno.'
      },
      temperatureAndHumidity: {
        tempRange: '12°C a 22°C',
        humidityNeeds: 'Moderada',
        coldTolerance: 'Excelente; tolera geadas leves e noites geladas.',
        humidityTips: 'Boa ventilação mantém a folhagem sadia.'
      },
      fertilizing: {
        schedule: 'A cada 15 a 20 dias durante a floração',
        fertilizerType: 'Adubo líquido para flores diluído.',
        winterCare: 'É a rainha do inverno brasileiro!'
      },
      pruningAndMaintenance: {
        tips: [
          'Retire as flores murchas para estimular novos botões florais sem parar.',
          'Corte folhas amareladas perto da terra.',
          'Colha as flores inteiras para decorar sobremesas e saladas.'
        ],
        propagationMethod: 'Por sementes finas germinadas no clima fresco.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% atóxica e comestível.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Floração no início da primavera; diminui com a chegada do calor forte.',
        fallWinter: 'Melhor época de cultivo e flores exuberantes e coloridas.'
      }
    }
  },

  // ==========================================
  // FOLHAGENS (2 espécies)
  // ==========================================
  {
    id: 'kb-costela-de-adao',
    commonName: 'Costela-de-Adão (Monstera)',
    scientificName: 'Monstera deliciosa',
    family: 'Araceae',
    category: 'folhagens',
    categoryLabel: 'Folhagens',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
    description: 'Imponente, escultural e cheia de recortes naturais nas folhas. Uma planta que transforma qualquer sala em uma floresta tropical acolhedora e ensina como as plantas se adaptam à luz.',
    nativeHabitat: 'Florestas tropicais úmidas do sul do México ao Panamá',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Luz Indireta Abundante (Meia-sombra)',
    wateringFrequency: 'A cada 7 a 10 dias',
    growthTime: 'Perene de longo prazo; folhas novas a cada 3-4 semanas no verão',
    kidTip: 'Mostre como uma folha nova nasce enroladinha como um charuto verde brilhante! As crianças adoram acompanhar o desenrolar da folha dia após dia até se abrir por completo.',
    funFacts: [
      'Os recortes nas folhas (fenestrações) surgiram na evolução para permitir que o vento e a luz da floresta passem até as folhas de baixo sem rasgar a planta.',
      'Suas raízes aéreas grossas podem ser colocadas para dentro da terra ou abraçar tutores de fibra de coco.',
      'Na natureza, produz um fruto comestível maduro cujo sabor lembra uma mistura doce de banana com abacaxi!'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 7 a 10 dias',
        summary: 'Aguarde os primeiros 3 a 5 cm de terra secarem antes de regar.',
        details: 'Regue até a água sair pelos furos do vaso e jogue fora o excesso do pratinho.',
        signsOfUnderWatering: 'Bordas das folhas secas, marrons e pontas curvadas.',
        signsOfOverWatering: 'Folhas inferiores amareladas e manchas escuras com halo amarelo.'
      },
      light: {
        requirement: 'Luz Indireta Abundante (Meia-sombra)',
        summary: 'Ama ambientes claros perto de janelas, mas sem sol forte direto.',
        details: 'Sol muito forte queima as folhas; pouca luz faz as folhas nascerem sem recortes.',
        directSunTolerance: 'Baixa a Média (apenas solzinho fraco do início da manhã)'
      },
      soilAndPotting: {
        mixType: 'Substrato aerado para aráceas (fibra de coco, perlita, casca de pinus e húmus).',
        drainageNeeds: 'Fundamental possuir orifícios generosos de drenagem.',
        repottingSchedule: 'Transplante a cada 18 a 24 meses para vaso maior com tutor.'
      },
      temperatureAndHumidity: {
        tempRange: '18°C a 30°C',
        humidityNeeds: 'Moderada a Alta (60%+)',
        coldTolerance: 'Sensível ao frio severo abaixo de 12°C e ao ar condicionado seco.',
        humidityTips: 'Limpe as folhas com pano úmido para tirar a poeira e melhorar a respiração.'
      },
      fertilizing: {
        schedule: 'Mensalmente na primavera e verão',
        fertilizerType: 'Adubo líquido para folhagens equilibrado.',
        winterCare: 'Suspenda o adubo no inverno e espaçar mais as regas.'
      },
      pruningAndMaintenance: {
        tips: [
          'Limpe as folhas largas mensalmente com pano macio e água.',
          'Conduza as raízes aéreas para dentro do vaso ou por um tutor de musgo.',
          'Pode folhas velhas amarelas cortando na base do talo.'
        ],
        propagationMethod: 'Por estaca de caule com pelo menos um nó e uma raiz aérea.'
      },
      toxicity: {
        toxicToPets: true,
        petDetails: 'Contém cristais de oxalato de cálcio insolúveis que podem irritar a boca de cães e gatos se mastigada. Mantenha em suportes altos fora do alcance de pets curiosos.',
        toxicToHumans: true
      },
      seasonalCalendar: {
        springSummer: 'Crescimento ativo e emissão de folhas novas recortadas.',
        fallWinter: 'Ritmo mais calmo; menos água e descanso vegetativo.'
      }
    }
  },
  {
    id: 'kb-suculenta-echeveria',
    commonName: 'Suculenta Echeveria (Rosa-de-Pedra)',
    scientificName: 'Echeveria elegans',
    family: 'Crassulaceae',
    category: 'folhagens',
    categoryLabel: 'Folhagens',
    imageUrl: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=1000&q=80',
    description: 'Parece uma rosa esculpida em pedra! Suas folhas gordinhas azul-esverdeadas armazenam água como pequenas reservas no deserto, sendo a planta mais tolerante e fácil para quem está começando.',
    nativeHabitat: 'Regiões semiáridas e montanhosas do México',
    difficultyLevel: 'Fácil (Iniciante)',
    lightRequirement: 'Sol Pleno ou Meia-Sombra Clara (4-6h)',
    wateringFrequency: 'A cada 10 a 14 dias (somente solo seco)',
    growthTime: 'Crescimento contínuo e produção de brotinhos laterais',
    kidTip: 'Ensine o "teste da folhinha mágica": retire com carinho uma folhinha gordinha da base e deite sobre um pratinho com terra seca. Em poucas semanas, nasce uma mini suculenta bebê na ponta!',
    funFacts: [
      'As folhas têm uma película fosca esbranquiçada chamada "pruína", que funciona como um filtro solar natural da planta: nunca esfregue essa camada!',
      'Consegue sobreviver semanas sem água porque suas folhas grossas são verdadeiros depósitos d\'água.',
      'Na primavera emite uma haste longa com florzinhas em formato de sino rosa e amarelo.'
    ],
    careInstructions: {
      watering: {
        frequency: 'A cada 10 a 14 dias',
        summary: 'Regue somente quando o substrato estiver completamente seco há dias.',
        details: 'Regue a terra ao redor da roseta; nunca deixe água acumulada no centro das folhas.',
        signsOfUnderWatering: 'Folhas enrugadas e murchas com aspecto de passas.',
        signsOfOverWatering: 'Folhas amareladas translúcidas e gelatinosas soltando ao menor toque.'
      },
      light: {
        requirement: 'Sol Pleno ou muita claridade direta',
        summary: 'Precisa de luz para manter o formato compacto de flor de pedra.',
        details: 'Se ficar em local escuro, ela se "estica" procurando luz e perde o formato redondo.',
        directSunTolerance: 'Altíssima'
      },
      soilAndPotting: {
        mixType: 'Substrato específico para cactos e suculentas (50% terra vegetal e 50% areia grossa/perlita).',
        drainageNeeds: 'Drenagem perfeita e rápida; água não pode ficar empoçada.',
        repottingSchedule: 'Vasos pequenos de barro com furo embaixo são os melhores.'
      },
      temperatureAndHumidity: {
        tempRange: '18°C a 32°C',
        humidityNeeds: 'Baixa (adora ambientes secos e ventilados)',
        coldTolerance: 'Sensível ao frio abaixo de 7°C e à umidade combinada com frio.',
        humidityTips: 'Nunca borrife água sobre as folhas da echeveria.'
      },
      fertilizing: {
        schedule: 'A cada 2 ou 3 meses durante as estações quentes',
        fertilizerType: 'Adubo para cactos e suculentas em dose bem diluída.',
        winterCare: 'No inverno, quase suspenda as regas (uma vez ao mês é suficiente).'
      },
      pruningAndMaintenance: {
        tips: [
          'Remova folhas secas na base da roseta com pinça.',
          'Separe os brotinhos bebês que nascem ao redor da planta mãe para novos vasinhos.',
          'Mantenha no local mais iluminado da casa.'
        ],
        propagationMethod: 'Por estaquia de folha apoiada sobre o substrato ou separação de filhotes.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% segura para cães, gatos e crianças.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento e possível haste floral com florzinhas em sino.',
        fallWinter: 'Cores mais intensas e redução drástica da necessidade de água.'
      }
    }
  }
];

/**
 * Converte um item da base de conhecimento botânico para o modelo IdentifiedPlant
 * para renderizar no PlantCareView ou adicionar ao Meu Jardim.
 */
export function catalogPlantToIdentifiedPlant(plant: CatalogPlant): IdentifiedPlant {
  return {
    id: plant.id,
    identifiedAt: new Date().toISOString(),
    imageUrl: plant.imageUrl,
    commonName: plant.commonName,
    scientificName: plant.scientificName,
    family: plant.family,
    confidence: 'high',
    confidenceScore: 100,
    description: plant.description,
    nativeHabitat: plant.nativeHabitat,
    plantType: `${plant.categoryLabel} / Jardinagem em Família`,
    difficultyLevel: plant.difficultyLevel,
    healthAssessment: plant.healthAssessment || {
      status: 'Saudável',
      summary: `Espécie catalogada na base de conhecimento Brota com parâmetros ideais de cultivo doméstico.`,
      diagnoses: []
    },
    careInstructions: plant.careInstructions,
    funFacts: plant.funFacts,
  };
}

export function getCatalogPlantById(id: string): CatalogPlant | undefined {
  return PLANT_KNOWLEDGE_BASE.find((p) => p.id === id);
}
