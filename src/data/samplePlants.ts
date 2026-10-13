import { IdentifiedPlant } from '../types';

export const SAMPLE_PLANTS: IdentifiedPlant[] = [
  {
    id: 'sample-tomato',
    identifiedAt: '2026-09-08T10:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1000&q=80',
    commonName: 'Tomateiro-cereja',
    scientificName: 'Solanum lycopersicum var. cerasiforme',
    family: 'Solanaceae',
    confidence: 'high',
    confidenceScore: 99,
    description: 'A estrela das hortas caseiras em família! O tomateiro-cereja produz cachos abundantes de frutinhos doces e suculentos, sendo perfeito para ensinar crianças sobre o ciclo das flores, o calor do sol e a emoção de colher o próprio alimento no pé.',
    nativeHabitat: 'Regiões andinas da América do Sul (noroeste da América do Sul)',
    plantType: 'Hortaliça de Fruto / Horta em Família',
    difficultyLevel: 'Fácil (Iniciante)',
    healthAssessment: {
      status: 'Saudável',
      summary: 'Planta viçosa em plena floração e frutificação inicial. Folhagem com coloração verde profunda e caules fortes.',
      diagnoses: [
        {
          issue: 'Brotos laterais axilares (ladrões)',
          severity: 'leve',
          suggestion: 'Retire com os dedos os pequenos brotos que nascem nas "axilas" entre o caule principal e as folhas para concentrar a energia da planta nos cachos de tomate.'
        }
      ]
    },
    careInstructions: {
      watering: {
        frequency: 'A cada 2 a 3 dias (ou diariamente no calor intenso)',
        summary: 'Mantenha o solo sempre úmido ao toque, sem encharcar.',
        details: 'Regue diretamente na base do caule, pela manhã, sem molhar as folhas nem as flores. Molhar as folhas favorece o surgimento de fungos como o míldio e a pinta-preta.',
        signsOfUnderWatering: 'Folhas murchas e caídas durante a manhã, pontas enroladas para dentro e abortamento de flores.',
        signsOfOverWatering: 'Folhas amareladas na base, solo empapado com cheiro forte e rachaduras na casca dos frutos.'
      },
      light: {
        requirement: 'Sol Pleno (Mínimo 5 a 6 horas diárias de sol direto)',
        summary: 'Precisa de muita luz direta para produzir flores férteis e frutos doces.',
        details: 'Posicione no ponto mais ensolarado da varanda ou do quintal. Se ficar na sombra, a planta cresce fina e esticada (estiolamento) e produz pouquíssimos tomates.',
        directSunTolerance: 'Altíssima (ama sol pleno e dias claros)'
      },
      soilAndPotting: {
        mixType: 'Solo fértil, rico em matéria orgânica (húmus de minhoca ou composto), terra vegetal e boa drenagem com areia ou perlita.',
        drainageNeeds: 'Indispensável. Em vasos, use recipientes de pelo menos 20 a 30 litros com boa furação e camada de argila expandida no fundo.',
        repottingSchedule: 'Transplante da sementeira para o vaso definitivo quando a muda atingir cerca de 10 a 15 cm e apresentar 4 a 6 folhas verdadeiras.'
      },
      temperatureAndHumidity: {
        tempRange: '18°C a 28°C',
        humidityNeeds: 'Moderada (50% a 70%). Ambientes muito abafados exigem boa circulação de ar.',
        coldTolerance: 'Sensível ao frio severo e geadas; abaixo de 12°C o desenvolvimento desacelera bastante.',
        humidityTips: 'Mantenha boa ventilação ao redor do tomateiro para que o pólen circule nas flores e o ar seque o orvalho das folhas.'
      },
      fertilizing: {
        schedule: 'A cada 15 a 20 dias durante a floração e colheita',
        fertilizerType: 'Adubos orgânicos ricos em fósforo, potássio e cálcio (húmus de minhoca, farinha de ossos, cinzas de madeira ou cascas de ovo trituradas).',
        winterCare: 'Em regiões quentes produz o ano todo; em regiões frias é cultivado como planta anual na primavera e verão.'
      },
      pruningAndMaintenance: {
        tips: [
          'Instale um tutor (estaca de bambu ou treliça) para amarrar o caule suavemente com barbante conforme ele cresce.',
          'Pince os brotinhos laterais que nascem na junção das folhas (desbrota) uma vez por semana.',
          'Corte as folhas mais velhas que encostam no chão para evitar contato com respingos de terra.'
        ],
        propagationMethod: 'Por sementes (germinação fácil em 5 a 10 dias) ou por estaquia de brotos laterais enraizados na água.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: 'Os tomatinhos maduros são seguros para o consumo humano e inofensivos em pequenas quantidades. As partes verdes da planta (caule e folhas) contêm solanina e devem ser mantidas longe de cães e gatos.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Pico de crescimento, floração e colheita: garanta sol intenso, regas regulares e adubação orgânica.',
        fallWinter: 'Final da colheita; proteja de noites muito frias ou prepare o canteiro para novo plantio na primavera.'
      }
    },
    funFacts: [
      'Botanicamente falando, o tomate não é um vegetal nem legume: é uma fruta (uma baga suculenta)!',
      'O aroma delicioso que fica nas mãos ao encostar no tomateiro vem de minúsculas glândulas nas folhas que produzem óleos protetores naturais.',
      'As flores do tomateiro são hermafroditas e contam com o vento e as vibrações das abelhas mamangavas para espalhar o pólen e gerar cada frutinho.'
    ],
    lastWatered: '2026-09-07'
  },
  {
    id: 'sample-basil',
    identifiedAt: '2026-09-08T10:15:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=1000&q=80',
    commonName: 'Manjericão Italiano',
    scientificName: 'Ocimum basilicum',
    family: 'Lamiaceae',
    confidence: 'high',
    confidenceScore: 98,
    description: 'Erva aromática clássica de folhas tenras, perfume inconfundível e sabor fresco. Indispensável na cozinha e muito prazerosa de cultivar na janela ou varanda, aproximando toda a família das receitas frescas feitas em casa.',
    nativeHabitat: 'Regiões tropicais da África Central e Sudeste Asiático',
    plantType: 'Erva Aromática / Condimento Culinário',
    difficultyLevel: 'Fácil (Iniciante)',
    healthAssessment: {
      status: 'Saudável',
      summary: 'Touceira compacta, folhas verdes brilhantes e excelente densidade foliar. Aroma intenso e sem sinais de pragas.',
      diagnoses: []
    },
    careInstructions: {
      watering: {
        frequency: 'A cada 1 a 2 dias (solo sempre levemente úmido)',
        summary: 'Regue assim que a superfície do substrato começar a secar.',
        details: 'O manjericão avisa quando tem sede murchando rapidamente, mas se recupera com vigor poucas horas após a rega. Evite pratinho com água parada.',
        signsOfUnderWatering: 'Folhas murchas, macias e caídas para os lados do vaso.',
        signsOfOverWatering: 'Folhas amareladas, caules escurecidos na base e terra com aspecto empastado.'
      },
      light: {
        requirement: 'Sol Pleno ou Meia-Sombra Intensa (Mínimo 4 a 5 horas de sol direto)',
        summary: 'Quanto mais luz solar receber, mais concentrados e saborosos serão seus óleos aromáticos.',
        details: 'Ideal em janelas voltadas para o norte ou leste, ou em jardineiras bem iluminadas.',
        directSunTolerance: 'Alta (desenvolve-se com máximo vigor sob sol direto)'
      },
      soilAndPotting: {
        mixType: 'Substrato leve, fofo e rico em composto orgânico com boa porcentagem de perlita ou casca de arroz carbonizada.',
        drainageNeeds: 'Excelente. A terra deve reter umidade sem nunca compactar.',
        repottingSchedule: 'Pode ser plantado em jardineiras ou vasos de 3 a 5 litros por muda, com renovação anual do substrato.'
      },
      temperatureAndHumidity: {
        tempRange: '20°C a 30°C',
        humidityNeeds: 'Moderada (40% a 65%).',
        coldTolerance: 'Muito sensível a frentes frias e geadas; abaixo de 10°C perde as folhas.',
        humidityTips: 'Prefere ar livre e ventilado. Em cozinhas fechadas, mantenha próximo a janelas abertas.'
      },
      fertilizing: {
        schedule: 'Mensalmente durante as estações quentes',
        fertilizerType: 'Biofertilizante orgânico, chá de húmus ou torta de mamona/farinha de ossos em doses suaves.',
        winterCare: 'Reduza as regas no inverno e proteja o vaso do vento gelado.'
      },
      pruningAndMaintenance: {
        tips: [
          'Faça a poda de beliscão (poda apical): corte a pontinha superior dos galhos para estimular o nascimento de dois novos galhos laterais.',
          'Pode as inflorescências (pendões de flor) assim que surgirem para que as folhas continuem doces, tenras e aromáticas.',
          'Colha as folhas sempre pela manhã para aproveitar a maior concentração de óleos essenciais.'
        ],
        propagationMethod: 'Estaquia de galho na água: coloque um galho de 10 cm em um copo com água e em cerca de 7 dias surgirão raízes prontas para plantar na terra.'
      },
      toxicity: {
        toxicToPets: false,
        petDetails: '100% atóxico e seguro para cães, gatos e seres humanos. Usado comumente na culinária e em chás.',
        toxicToHumans: false
      },
      seasonalCalendar: {
        springSummer: 'Crescimento explosivo: colha com frequência, pode flores e mantenha regas diárias.',
        fallWinter: 'Crescimento mais lento: mantenha no local mais quente e iluminado da casa.'
      }
    },
    funFacts: [
      'O nome botânico "Ocimum" vem do grego antigo e significa "perfumado", enquanto "basilicum" significa "real" ou "digno de reis".',
      'Plantar manjericão perto de tomateiros na horta é um dos consórcios mais famosos da permacultura: ele ajuda a afastar moscas-brancas e realça o sabor dos tomates!',
      'Fazer mudinhas de manjericão em copos d\'água é uma das atividades mais encantadoras para fazer com crianças, pois as raízes brancas crescem visivelmente a cada dois dias.'
    ],
    lastWatered: '2026-09-08'
  },
  {
    id: 'sample-monstera',
    identifiedAt: '2026-09-08T10:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
    commonName: 'Costela-de-Adão (Monstera)',
    scientificName: 'Monstera deliciosa',
    family: 'Araceae',
    confidence: 'high',
    confidenceScore: 98,
    description: 'Uma imponente planta tropical nativa das florestas úmidas da América Central, famosa por suas folhas verdes brilhantes em formato de coração que desenvolvem fenestrações (recortes naturais) conforme amadurece.',
    nativeHabitat: 'Florestas tropicais do sul do México até o Panamá',
    plantType: 'Folhagem Ornamental / Trepadeira de Interior',
    difficultyLevel: 'Fácil (Iniciante)',
    healthAssessment: {
      status: 'Saudável',
      summary: 'Folhagem viçosa em verde esmeralda com nova folha jovem desabrochando. Sem sinais de pragas ou carências nutricionais.',
      diagnoses: [
        {
          issue: 'Desenvolvimento natural de raízes aéreas',
          severity: 'leve',
          suggestion: 'Comportamento biológico perfeitamente normal. Direcione as raízes aéreas para dentro do substrato ou conduza-as por um tutor de musgo para sustentação.'
        }
      ]
    },
    careInstructions: {
      watering: {
        frequency: 'A cada 7 a 10 dias',
        summary: 'Aguarde os primeiros 5 cm de solo secarem antes de regar novamente.',
        details: 'Regue abundantemente até a água escorrer pelos furos do vaso. Esvazie o pratinho após 15 minutos para prevenir o apodrecimento radicular. Reduza a frequência no inverno.',
        signsOfUnderWatering: 'Folhas caídas e murchas, bordas das folhas enrolando para dentro e pontas marrons ressecadas.',
        signsOfOverWatering: 'Folhas inferiores amareladas, manchas castanhas amolecidas com halo amarelo e cheiro de mofo no solo.'
      },
      light: {
        requirement: 'Luz Indireta Abundante (Meia-sombra)',
        summary: 'Desenvolve-se plenamente com claridade filtrada intensa; evite sol direto nas horas mais quentes.',
        details: 'Posicione a cerca de 1 a 2 metros de janelas voltadas para o leste ou norte. Sol suave do início da manhã estimula os recortes das folhas, mas o sol forte da tarde queima a folhagem.',
        directSunTolerance: 'Baixa a Moderada (máximo 1 a 2 horas de sol matinal muito suave)'
      },
      soilAndPotting: {
        mixType: 'Substrato aerado e drenante para aráceas (casca de pinus, perlita, turfa/fibra de coco e húmus de minhoca)',
        drainageNeeds: 'Fundamental possuir orifícios de drenagem. Vasos de barro ou vasos plásticos com furos generosos funcionam muito bem.',
        repottingSchedule: 'A cada 18 a 24 meses durante a primavera, quando as raízes preencherem totalmente o recipiente.'
      },
      temperatureAndHumidity: {
        tempRange: '20°C a 30°C',
        humidityNeeds: '60% ou superior ideal; tolera a umidade média residencial (45-55%).',
        coldTolerance: 'Sensível ao frio extremo; não expor a temperaturas abaixo de 13°C ou a correntes de ar condicionado.',
        humidityTips: 'Agrupe com outras plantas tropicais, utilize prato com pedras úmidas ou umidificador de ambiente em épocas de estiagem.'
      },
      fertilizing: {
        schedule: 'Mensalmente durante a primavera e verão',
        fertilizerType: 'Adubo líquido equilibrado (NPK 10-10-10 ou biofertilizante orgânico) diluído na metade da dose indicada pelo fabricante.',
        winterCare: 'Suspenda a adubação no outono e inverno, período em que a planta reduz seu ritmo vegetativo.'
      },
      pruningAndMaintenance: {
        tips: [
          'Limpe as folhas largas mensalmente com pano macio umedecido em água para remover poeira e potencializar a fotossíntese.',
          'Instale um tutor de fibra de coco ou musgo sphagnum para apoiar o hábito natural trepador da planta.',
          'Remova folhas velhas ou danificadas cortando rente à base com tesoura de poda esterilizada.'
        ],
        propagationMethod: 'Estaca de caule cortada logo abaixo de um nó com pelo menos uma raiz aérea; enraíze na água ou em musgo úmido.'
      },
      toxicity: {
        toxicToPets: true,
        petDetails: 'Contém cristais de oxalato de cálcio insolúveis que provocam irritação na mucosa oral, salivação intensa e desconforto digestivo em cães e gatos se mastigada.',
        toxicToHumans: true
      },
      seasonalCalendar: {
        springSummer: 'Fase de crescimento acelerado: regue com regularidade, fertilize mensalmente e amarre novos brotos no tutor.',
        fallWinter: 'Espace mais as regas, cesse a fertilização e aproxime o vaso da janela caso os dias fiquem mais escuros.'
      }
    },
    funFacts: [
      'Na natureza, a Monstera deliciosa produz uma fruta comestível que, quando completamente madura, tem sabor que lembra uma mistura de banana com abacaxi!',
      'As aberturas e fendas das folhas surgiram na evolução para permitir que ventanias de tempestades tropicais atravessem a folhagem sem rasgá-la.',
      'Suas raízes aéreas são tão fortes que povos indígenas tradicionalmente as usavam para tecer cestos e amarrações.'
    ],
    lastWatered: '2026-09-06'
  }
];
