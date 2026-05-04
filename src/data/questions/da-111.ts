import { Question } from "@/types";

// DA-111: Basic Principles of Plant Breeding, Seed Production, Testing & Certification
// 100 questions strictly from pdf_da111.txt (PJTSAU Diploma syllabus)
// Answer distribution: Q1→0, Q2→2, Q3→1, Q4→3 repeating = 25 each A/B/C/D

export const da111Questions: Question[] = [
  {
    id: "d111_001",
    subject: "da-111",
    question: "Plant breeding is defined as the art, science and technology of:",
    options: [
      "Improving the genetic make-up of plants for human use",
      "Studying the ecology of wild plant species",
      "Applying fertilizers for maximum crop production",
      "Cultivating plants using modern irrigation methods"
    ],
    correct: 0,
    explanation: "Plant breeding is defined as an art, a science, and technology of improving the genetic make-up of plants in relation to their economic use for mankind."
  },
  {
    id: "d111_002",
    subject: "da-111",
    question: "The process of bringing a wild species under human management is called:",
    options: [
      "Hybridization of wild plants with cultivated ones",
      "Selection of plants from natural habitats",
      "Domestication of wild plant species",
      "Mutation breeding of crop plants"
    ],
    correct: 2,
    explanation: "The process of bringing a wild species under human management is referred to as domestication. Domestication may be the most basic method of plant breeding."
  },
  {
    id: "d111_003",
    subject: "da-111",
    question: "Mendel's laws of inheritance were rediscovered in the year:",
    options: [
      "1850 by Gregor John Mendel in Vienna",
      "1900 by scientists working with pea plants",
      "1850 as published by Mendel in journal",
      "1902 by Sutton and Boveri in chromosomes"
    ],
    correct: 1,
    explanation: "In 1900, Mendel's laws of inheritance were rediscovered and laid the foundation for the development of plant breeding."
  },
  {
    id: "d111_004",
    subject: "da-111",
    question: "Sir T.S. Venkatraman is known for his contribution to sugarcane breeding called:",
    options: [
      "Developing dwarf sugarcane varieties for India",
      "Introducing tropical noble cane into Indian agriculture",
      "Transferring high sugar content from tropical to North Indian canes",
      "Establishing the Sugarcane Breeding Institute at Coimbatore"
    ],
    correct: 2,
    explanation: "Sir T.S. Venkatraman transferred thick stem and high sugar contents from tropical noble cane to North Indian canes. This process is known as noblization of sugarcane."
  },
  {
    id: "d111_005",
    subject: "da-111",
    question: "Who proposed the theory of natural evolution that greatly advanced botanical sciences?",
    options: [
      "Charles Darwin, who proposed natural selection theory",
      "Hugo de Vries, who discovered plant mutations",
      "Gregor Mendel, who studied pea plant genetics",
      "Watson and Crick, who described DNA structure"
    ],
    correct: 0,
    explanation: "Charles Darwin proposed the theory of natural evolution. Enormous development in the branches of botany was achieved in the 20th century following Darwin's work."
  },
  {
    id: "d111_006",
    subject: "da-111",
    question: "The term 'mutation' was first used by Hugo de Vries while working on:",
    options: [
      "Pisum sativum (Garden Pea) plants",
      "Zea mays (Maize) plants",
      "Oenothera Lamarkiana (Evening Prime Rose)",
      "Nicotiana tabacum (Tobacco) plants"
    ],
    correct: 2,
    explanation: "The term mutation was coined by Hugo de Vries in 1900 for the first time while working on Oenothera Lamarkiana (Evening Prime Rose) to describe new varieties."
  },
  {
    id: "d111_007",
    subject: "da-111",
    question: "The Chromosome theory of genetics was proposed by:",
    options: [
      "Watson and Crick in year 1953",
      "Sutton and Boveri in the year 1902",
      "Hugo de Vries in the year 1900",
      "Gregor Mendel in the year 1850"
    ],
    correct: 1,
    explanation: "Sutton and Boveri (1902) proposed the Chromosome theory, a fundamental unifying theory of genetics which identifies chromosomes as the carriers of genetic material."
  },
  {
    id: "d111_008",
    subject: "da-111",
    question: "The double helix structure of the DNA molecule was proposed by:",
    options: [
      "Fraenkel-Conrat who proposed RNA structure",
      "Nirenberg and Khorana for nucleic acid code",
      "Hugo de Vries and Stadler in mutation work",
      "Watson and Crick in the year 1953"
    ],
    correct: 3,
    explanation: "Watson and Crick (1953) proposed the double helix structure of the DNA molecule, which became the foundation of molecular genetics and modern plant breeding."
  },
  {
    id: "d111_009",
    subject: "da-111",
    question: "M.S. Swaminathan is credited with developing high yielding varieties of which crops?",
    options: [
      "Wheat, Rice, Potato and Jute in India",
      "Maize, Sorghum, Bajra and Cotton",
      "Paddy, Sugarcane, Cotton and Groundnut",
      "Wheat, Barley, Rye and Triticale"
    ],
    correct: 0,
    explanation: "M.S. Swaminathan was responsible for the green revolution in India and developed high yielding varieties of Wheat, Rice, Potato and Jute."
  },
  {
    id: "d111_010",
    subject: "da-111",
    question: "The Sugarcane Breeding Institute was established in 1912 at:",
    options: [
      "Hyderabad in Andhra Pradesh for Jowar research",
      "New Delhi at IARI for cereal breeding work",
      "Simla for potato research and development",
      "Coimbatore due to uniform flowering conditions"
    ],
    correct: 3,
    explanation: "Sugarcane Breeding Institute was established in 1912 at Coimbatore. Due to uniform flowering at Coimbatore, crossing work on sugar cane was started there."
  },
  {
    id: "d111_011",
    subject: "da-111",
    question: "In India, the first maize hybrid 'Ganga-1' was released in the year:",
    options: [
      "1957 when coordinated research program started",
      "1964 at IARI in collaboration with Rockfeller",
      "1961 in collaboration with Rockfeller Foundation",
      "1965 when AICRP on rice was started"
    ],
    correct: 2,
    explanation: "Established Co-ordinated research programme in 1957 at IARI, New Delhi. In collaboration with Rockfeller Foundation, released first hybrid Ganga-1 in 1961."
  },
  {
    id: "d111_012",
    subject: "da-111",
    question: "The Theophrastus (300 BC) is revered in botany as the:",
    options: [
      "Father of Genetics for his inheritance work",
      "Father of Ecology for his environmental work",
      "Father of Botany for his plant classification",
      "Father of Agriculture for ancient farming texts"
    ],
    correct: 2,
    explanation: "Theophrastus (300 BC) is known as the Father of Botany. His works on plant taxonomy and morphology laid the foundation for botanical science."
  },
  {
    id: "d111_013",
    subject: "da-111",
    question: "The pureline theory was proposed by W.L. Johannsen based on studies with:",
    options: [
      "Princess variety of Phaseolus vulgaris beans",
      "Maize variety in Illinois long-term studies",
      "Wheat variety in European breeding programs",
      "Paddy variety at International Rice Institute"
    ],
    correct: 0,
    explanation: "The concept of pureline was proposed by Johannsen in 1903 on the basis of his studies with princess variety of beans (Phaseolus vulgaris) and it is applicable to self pollinated crops."
  },
  {
    id: "d111_014",
    subject: "da-111",
    question: "The term 'heterosis' was coined by G.H. Shull in the year:",
    options: [
      "1900 when Hugo de Vries worked with mutations",
      "1902 when Sutton-Boveri proposed chromosome theory",
      "1953 when Watson-Crick described DNA structure",
      "1914 based on his maize hybridization experiments"
    ],
    correct: 3,
    explanation: "G.H. Shull (1914) coined the term heterosis. In maize, loss of vigor occurs due to self pollination and hybrid vigor is more due to cross pollination."
  },
  {
    id: "d111_015",
    subject: "da-111",
    question: "The major objective of plant breeding regarding maturity duration is to develop:",
    options: [
      "Late maturing varieties to increase crop duration",
      "Varieties requiring more crop management period",
      "Long duration varieties for maximum biomass yield",
      "Early maturing varieties permitting new crop rotations"
    ],
    correct: 3,
    explanation: "Earliness is a most desirable character. It requires less crop management period, less insecticidal sprays, permits new crop rotations and often extends the crop area."
  },
  {
    id: "d111_016",
    subject: "da-111",
    question: "In Cotton, the maturity duration has been reduced through plant breeding from:",
    options: [
      "360 days to 270 days through intensive selection",
      "200 days to 100 days by developing early varieties",
      "270 days to 120 days by hybridization method",
      "270 days to 170 days through breeding programs"
    ],
    correct: 3,
    explanation: "Maturity has been reduced from 270 days to 170 days in cotton, from 270 days to 120 days in pigeonpea, and from 360 days to 270 days in sugarcane through breeding."
  },
  {
    id: "d111_017",
    subject: "da-111",
    question: "Neurotoxin causing paralysis of lower limbs is found in which crop plant?",
    options: [
      "Gossypium hirsutum (Cotton) seed kernel",
      "Brassica sp. causing harmful erucic acid",
      "Khesari (Lathyrus sativus) food legume crop",
      "Groundnut (Arachis hypogaea) seed pods"
    ],
    correct: 2,
    explanation: "It is essential to develop varieties free from toxic compounds. Removal of neurotoxin in Khesari (Lathyrus sativus) which leads to paralysis of lower limbs is necessary."
  },
  {
    id: "d111_018",
    subject: "da-111",
    question: "The outermost whorl of a flower containing green leafy structures is called:",
    options: [
      "Corolla consisting of brightly coloured petals",
      "Androecium consisting of male reproductive parts",
      "Gynoecium with stigma, style and ovary parts",
      "Calyx consisting of sepals protecting the bud"
    ],
    correct: 3,
    explanation: "The outermost whorl of the flower has green, leafy structures known as sepals. The sepals, collectively called the calyx, help to protect the unopened bud."
  },
  {
    id: "d111_019",
    subject: "da-111",
    question: "In monocot flowers, petals usually number:",
    options: [
      "Three or multiples of three per flower",
      "Five or multiples of five per flower",
      "Four or multiples of four per flower",
      "Two or multiples of two per flower"
    ],
    correct: 0,
    explanation: "In monocots, petals usually number three or multiples of three; in dicots, the number of petals is four or five, or multiples of four and five."
  },
  {
    id: "d111_020",
    subject: "da-111",
    question: "The male reproductive structure of a flower consisting of stamens is called:",
    options: [
      "Gynoecium with stigma, style and ovary",
      "Calyx composed of green protective sepals",
      "Corolla of brightly coloured attractive petals",
      "Androecium containing microsporangia in anthers"
    ],
    correct: 3,
    explanation: "The third whorl contains the male reproductive structures and is known as the androecium. The androecium has stamens with anthers that contain the microsporangia."
  },
  {
    id: "d111_021",
    subject: "da-111",
    question: "Double fertilization is a unique process that occurs in:",
    options: [
      "Gymnosperms such as pine and cycads only",
      "Fungi such as mushrooms and bread mold",
      "Ferns and mosses in moist environments",
      "Angiosperms only among all plant groups"
    ],
    correct: 3,
    explanation: "The two acts of fertilization (syngamy with egg and triple fusion with polar nuclei) constitute the process of double fertilization. Double fertilization occurs in angiosperms only."
  },
  {
    id: "d111_022",
    subject: "da-111",
    question: "Placentation refers to the attachment of:",
    options: [
      "Pollen tube entering the embryo sac",
      "Filament of stamen connecting to anther",
      "Ovules inside the ovary wall surface",
      "Style connecting ovary to the stigma"
    ],
    correct: 2,
    explanation: "Placentation is the attachment of ovules inside the ovary. The ovules inside a flower's ovary are attached via funiculi, which provides nutrients to the developing embryo."
  },
  {
    id: "d111_023",
    subject: "da-111",
    question: "The study of pollen grains is known as:",
    options: [
      "Palynology, the science of pollen study",
      "Paedology, the study of soil profiles",
      "Phenology, the study of seasonal events",
      "Pomology, the study of fruit crops"
    ],
    correct: 0,
    explanation: "Study of Pollen grains is called Palynology. Palynology was developed by Vode House, P.K.K. Nair, Vishnu mitre, Tharil, CGK Ramanujam, Sunil Malchnada."
  },
  {
    id: "d111_024",
    subject: "da-111",
    question: "Each pollen mother cell (PMC) after meiotic division produces how many microspores?",
    options: [
      "Two microspores through first meiotic division",
      "Eight microspores from two meiotic divisions",
      "Six microspores arranged in two triplets",
      "Four microspores that become pollen grains"
    ],
    correct: 3,
    explanation: "Pollen Mother Cells are in diploid (2n) condition and each PMC produces four microspores. Each microspore after thickening of the wall transforms into a pollen grain."
  },
  {
    id: "d111_025",
    subject: "da-111",
    question: "In megasporogenesis, each megaspore mother cell produces four megaspores, of which:",
    options: [
      "All four megaspores develop into embryo sacs",
      "Two megaspores develop into functional embryos",
      "Three megaspores develop into endosperm cells",
      "Three degenerate leaving one functional megaspore"
    ],
    correct: 3,
    explanation: "Each MMC produces four megaspores out of which three degenerate resulting in a single functional megaspore which later develops into the embryo sac."
  },
  {
    id: "d111_026",
    subject: "da-111",
    question: "The female gametophyte in angiosperms is also called the:",
    options: [
      "Nucellus tissue enclosing the ovule body",
      "Integument protecting the embryo sac tissue",
      "Embryo sac or megagametophyte structure",
      "Perisperm residual tissue in mature seed"
    ],
    correct: 2,
    explanation: "The surviving haploid megaspore undergoes mitosis to produce an eight-nucleate, seven-cell female gametophyte, also known as the megagametophyte or embryo sac."
  },
  {
    id: "d111_027",
    subject: "da-111",
    question: "The finger-like protruded structures present on synergids are called:",
    options: [
      "Filiform apparatus aiding pollen tube guidance",
      "Funiculus attaching ovule to the placenta",
      "Raphe as a ridge on the ovule body",
      "Chalazal end the basal end of ovule"
    ],
    correct: 0,
    explanation: "Finger like protruded structures present on synergids are called as filiform apparatus. The synergids help guide the pollen tube for successful fertilization."
  },
  {
    id: "d111_028",
    subject: "da-111",
    question: "Non-endospermic seeds, where endosperm is absent at maturity, include:",
    options: [
      "Paddy, Maize and Castor as examples",
      "Wheat, Jowar and Barley as examples",
      "Pea, Beans and Chick Pea as examples",
      "Sunflower, Sesame and Mustard as examples"
    ],
    correct: 2,
    explanation: "Non-endospermic seeds include Pea, Beans, Chick Pea. Endosperm is not present in mature seeds as it is utilized in the formation of the seed itself during development."
  },
  {
    id: "d111_029",
    subject: "da-111",
    question: "Autogamy refers to the transfer of pollen grains from:",
    options: [
      "Anther to stigma of flowers of another plant",
      "One flower to flowers on the same plant",
      "Anther to stigma of the same flower itself",
      "Wind blown pollen to distant plant stigmas"
    ],
    correct: 2,
    explanation: "Autogamy or self-pollination is the transfer of pollen grains from the anther to the stigma of the same flower. It results in self-fertilization and homozygosity."
  },
  {
    id: "d111_030",
    subject: "da-111",
    question: "Geitonogamy is cross pollination where pollen from one flower falls on:",
    options: [
      "The stigma of flowers of a different species",
      "The stigma of a genetically different plant",
      "Stigmas of other flowers of the same plant",
      "Stigmas only in insect-pollinated crop plants"
    ],
    correct: 2,
    explanation: "Geitonogamy is when pollen from a flower of one plant falls on the stigmas of other flowers of the same plant, e.g., in Maize."
  },
  {
    id: "d111_031",
    subject: "da-111",
    question: "Homogamy promotes self-pollination by ensuring:",
    options: [
      "Anthers mature before pistil in the flower",
      "Pistil matures before anthers in the flower",
      "Simultaneous maturation of anthers and stigma",
      "Spatial separation of stigma and anthers always"
    ],
    correct: 2,
    explanation: "Maturation of anthers and stigma of a flower at the same time is called homogamy. As a rule, homogamy is essential for self-pollination. Eg: Caltha."
  },
  {
    id: "d111_032",
    subject: "da-111",
    question: "Cleistogamy ensures complete self-pollination because:",
    options: [
      "Flowers open before the pollen is released",
      "Stigma becomes receptive after flower opens",
      "Flowers remain closed preventing foreign pollen",
      "Pistil matures much before anthers dehisce"
    ],
    correct: 2,
    explanation: "In cleistogamy, flowers do not open at all. This ensures complete self-pollination since foreign pollen cannot reach the stigma of a closed flower."
  },
  {
    id: "d111_033",
    subject: "da-111",
    question: "Protogyny as a mechanism for cross pollination refers to:",
    options: [
      "Anthers mature earlier than pistil in flower",
      "Simultaneous maturation of both male and female",
      "Physical separation of stamens from stigma",
      "Pistil maturing before anthers in same flower"
    ],
    correct: 3,
    explanation: "When pistil matures before anthers, it is called protogyny. It is found in pearl millet, solanum. It promotes cross pollination even in hermaphrodite species."
  },
  {
    id: "d111_034",
    subject: "da-111",
    question: "Self incompatibility prevents self-pollination by causing failure of:",
    options: [
      "Pollen release from anthers in bisexual flowers",
      "Stigma to become receptive in self pollinated crops",
      "Anther formation during early flower development",
      "Functional pollen to fertilize the same flower"
    ],
    correct: 3,
    explanation: "Self incompatibility is the inability of fertile pollens to fertilize the same flower or any flower of the same plant. It prevents self-pollination and promotes cross pollination."
  },
  {
    id: "d111_035",
    subject: "da-111",
    question: "Pollination of Vallisnaria plant species is carried out by:",
    options: [
      "Wind called anemophily in paddy crops",
      "Birds called ornithophily in Bignonia plants",
      "Insects called entomophily in Cestrum plants",
      "Water called epihydrophily or hypohydrophily"
    ],
    correct: 3,
    explanation: "Vallisnaria is pollinated by water (epihydrophily), while Zostera is pollinated by water (hypohydrophily). These are examples of hydrophily or water pollination."
  },
  {
    id: "d111_036",
    subject: "da-111",
    question: "Apomixis is defined as the development of seed without:",
    options: [
      "Formation of embryo sac from megaspore",
      "Growth of pollen tube in the style",
      "Sexual fusion or fertilization of gametes",
      "Formation of ovule inside the ovary"
    ],
    correct: 2,
    explanation: "Apomixis refers to the development of seed without sexual fusion (fertilization). In apomixis embryo develops without fertilization. Thus apomixis is an asexual means of reproduction."
  },
  {
    id: "d111_037",
    subject: "da-111",
    question: "Adventive embryony is the development of embryo from:",
    options: [
      "Unfertilized egg cell of the embryo sac",
      "Synergids or antipodal cells only",
      "Diploid cells of nucellus or integuments",
      "Megaspore mother cell after meiotic division"
    ],
    correct: 2,
    explanation: "Adventive embryony is the development of embryo directly from the diploid cells of ovule lying outside the embryosac belonging to either nucellus or integuments. E.g., mango, citrus."
  },
  {
    id: "d111_038",
    subject: "da-111",
    question: "Cytoplasmic Male Sterility (CMS) is most useful for hybrid seed production in:",
    options: [
      "Onion, where vegetative part is the economic product",
      "Sunflower, where seeds are the economic product",
      "Bajra, where grains are the economic product",
      "Maize, where both grain and fodder are needed"
    ],
    correct: 0,
    explanation: "Cytoplasmic male sterility may be utilized for producing hybrid seed in certain ornamental species, or in species where a vegetative part is of economic value. E.g., Onion."
  },
  {
    id: "d111_039",
    subject: "da-111",
    question: "Cytoplasmic-Genetic Male Sterility (CGMS) system is used in hybrid breeding of:",
    options: [
      "Bajra, Carrot, Chillies, Maize, Wheat and Sunflower",
      "Tomato, Barley, Brinjal, Paddy and Soybean",
      "Onion, Garlic, Carrot, Radish and Beet crops",
      "Cotton, Sunflower, Groundnut and Sesame crops"
    ],
    correct: 0,
    explanation: "Cytoplasmic-genetic male sterility (CGMS) is used in Bajra, Carrot, Chillies, Maize, Wheat, Paddy, Jowar and Sunflower for hybrid seed production."
  },
  {
    id: "d111_040",
    subject: "da-111",
    question: "Vegetative reproduction results in offspring that are:",
    options: [
      "Genetically different from the parent plant",
      "Produced through sexual gamete fusion always",
      "More variable than sexually produced offspring",
      "Identical in all characters to the parent plant"
    ],
    correct: 3,
    explanation: "Vegetative reproduction involves only one parent and fusion of gametes is absent. Progeny resemble the parents. This is called vegetative reproduction or vegetative propagation."
  },
  {
    id: "d111_041",
    subject: "da-111",
    question: "A rhizome is a specialized stem that grows:",
    options: [
      "Vertically underground storing food in tubers",
      "Horizontally just below or on the ground surface",
      "Upward as an aerial stem producing bulbils",
      "Above ground as horizontal stem rooting at nodes"
    ],
    correct: 1,
    explanation: "A rhizome is a specialized stem structure in which the main axis of the plant grows horizontally just below or on the surface of the ground. E.g., Bamboo, Banana, Iris."
  },
  {
    id: "d111_042",
    subject: "da-111",
    question: "Sugarcane stem pieces used for vegetative propagation are called:",
    options: [
      "Tubers with nodes arranged spirally for budding",
      "Suckers arising from underground stem parts",
      "Bulbs that consist predominantly of modified leaves",
      "Canes or setts used for vegetative multiplication"
    ],
    correct: 3,
    explanation: "Plant parts used in vegetative propagation: Sugarcane: Canes; Rose: Cuttings; Potato: Tubers; Banana: Suckers; Onion: Bulbs."
  },
  {
    id: "d111_043",
    subject: "da-111",
    question: "Colchicine used for chromosome doubling is derived from which plant?",
    options: [
      "Colchicum autumnale belonging to the Liliaceae family",
      "Datura stramonium in the Solanaceae family",
      "Atropa belladonna from the Solanaceae family",
      "Taxus baccata from the Taxaceae conifer family"
    ],
    correct: 0,
    explanation: "Colchicine belonged to Liliaceae family. It is an alkaloid derived from the seeds of plant Colchicum autumnale. It inhibits spindle fibre formation during meiosis without inhibiting chromosome replication."
  },
  {
    id: "d111_044",
    subject: "da-111",
    question: "Commercial bread wheat (Triticum aestivum) is an example of a:",
    options: [
      "Diploid species with two complete genomes",
      "Tetraploid species with four genome sets",
      "Triploid hybrid produced for sterile fruit",
      "Hexaploid species with six genome sets"
    ],
    correct: 3,
    explanation: "Commercial bread wheat - Triticum aestivum is an example of hexaploid. It has 6 genomes (6x) making it a hexaploid species used widely for bread making globally."
  },
  {
    id: "d111_045",
    subject: "da-111",
    question: "The new inter-generic hybrid Triticale was developed from a cross between:",
    options: [
      "Triticum sp. and Secale cereale (rye) species",
      "Triticum aestivum and Hordeum vulgare barley",
      "Avena sativa and Avena byzantina oat species",
      "Oryza sativa and Oryza perennis rice species"
    ],
    correct: 0,
    explanation: "Inter generic hybridization may be used to develop a new crop species. E.g., Triticale from a cross between Triticum sp. and Secale cereale (rye)."
  },
  {
    id: "d111_046",
    subject: "da-111",
    question: "In hybridization, emasculation should ideally be done:",
    options: [
      "In morning hours when flowers fully open",
      "At noon when temperature is at maximum",
      "During afternoon between 4 PM and 6 PM",
      "Just after harvesting pollen from male parent"
    ],
    correct: 2,
    explanation: "Emasculation is generally done in the evening, between 4 PM and 6 PM one day before the anthers are expected to dehisce or mature and the stigma is likely to become fully receptive."
  },
  {
    id: "d111_047",
    subject: "da-111",
    question: "Mass selection is most commonly practiced in which type of crop?",
    options: [
      "Self-pollinated crops like paddy and wheat",
      "Vegetatively propagated crops like potato",
      "Cross pollinated crops like cotton and bajra",
      "Apomictic crops like citrus and mango"
    ],
    correct: 2,
    explanation: "Mass selection is common in cross pollinated species and rare in self pollinated and asexually propagated species. Development of a variety may take 8 years in this method."
  },
  {
    id: "d111_048",
    subject: "da-111",
    question: "In mass selection, seeds from selected plants are:",
    options: [
      "Grown in progeny rows and individually evaluated",
      "Kept separately and backcrossed with parents",
      "Used for making hybrid combinations each season",
      "Mixed together to constitute a new bulk variety"
    ],
    correct: 3,
    explanation: "In mass selection, a large number of plants having similar phenotype are selected and their seeds are mixed together to constitute a new variety. The plants are genotypically different."
  },
  {
    id: "d111_049",
    subject: "da-111",
    question: "In pure line selection, variety development takes approximately:",
    options: [
      "Eight years which is the same as mass selection",
      "Five years for release as an improved variety",
      "Ten years for evaluation and variety release",
      "Three years as it is a rapid selection method"
    ],
    correct: 2,
    explanation: "In pureline selection, from the base population select best looking plants of 50-100, grow in progeny rows, reject unwanted progenies, repeat the process. Variety development may take ten years."
  },
  {
    id: "d111_050",
    subject: "da-111",
    question: "A clone consists of plants produced from a single parent through:",
    options: [
      "Sexual reproduction using male and female gametes",
      "Hybridization between two selected parent plants",
      "Mutation breeding using physical or chemical agents",
      "Asexual reproduction without any gamete fusion"
    ],
    correct: 3,
    explanation: "A clone is a group of plants produced from a single parent through asexual reproduction. Asexually propagated crops consist of large number of clones, and they are often known as clonal crops."
  },
  {
    id: "d111_051",
    subject: "da-111",
    question: "Clonal selection variety development typically takes:",
    options: [
      "Five years for identification and release",
      "Eight years as in mass selection method",
      "Ten years as in pure line selection method",
      "Nine years from selection to variety release"
    ],
    correct: 3,
    explanation: "Variety development through clonal selection may take place in nine years. Superior clones are identified, put in multilocation yield trials, and released as a new variety."
  },
  {
    id: "d111_052",
    subject: "da-111",
    question: "Introduction as a plant breeding method involves taking a genotype to:",
    options: [
      "A new place where it was not previously grown",
      "A research station for genetic improvement work",
      "A hybridization program for crossing purposes",
      "A selection program for purifying existing variety"
    ],
    correct: 0,
    explanation: "Taking a genotype or a group of genotypes into a new place or environment where they were not grown previously is termed as Introduction."
  },
  {
    id: "d111_053",
    subject: "da-111",
    question: "Spontaneous mutations occur in natural populations at a rate of approximately:",
    options: [
      "10-3 or one in thousand organisms affected",
      "10-6 or one in million organisms affected",
      "10-9 or one in billion organisms affected",
      "10-12 or one in trillion organisms affected"
    ],
    correct: 1,
    explanation: "Spontaneous mutations occur in natural populations at a low rate (10-6). Natural agents like electrical waves, atomic rays, temperature etc are responsible for spontaneous mutations."
  },
  {
    id: "d111_054",
    subject: "da-111",
    question: "The chemical mutagen Colchicine causes polyploidy by inhibiting:",
    options: [
      "DNA replication during the S phase of cell cycle",
      "Protein synthesis in the ribosomal machinery",
      "Chromosome replication in dividing plant cells",
      "Spindle fibre formation during anaphase of meiosis"
    ],
    correct: 3,
    explanation: "In anaphase of meiosis division, colchicine inhibits formation of spindle fibres, but does not inhibit chromosome replication. This property is used to produce polyploids."
  },
  {
    id: "d111_055",
    subject: "da-111",
    question: "The Gottlieb Haberlandt who attempted plant tissue culture in vitro is called:",
    options: [
      "Father of Plant Breeding for his contributions",
      "Father of Genetics for his landmark research",
      "Father of Mutation Breeding for mutation work",
      "Father of Plant Tissue Culture for his 1902 work"
    ],
    correct: 3,
    explanation: "In 1902, Gottlieb Haberlandt, a German plant physiologist, attempted to cultivate plant tissue culture cell in vitro. He is regarded as the father of plant tissue culture."
  },
  {
    id: "d111_056",
    subject: "da-111",
    question: "Totipotency in tissue culture refers to the ability of a cell to:",
    options: [
      "Resist viral and bacterial pathogens in culture",
      "Produce secondary metabolites in liquid medium",
      "Give rise to a whole plant regardless of ploidy",
      "Divide rapidly on any type of culture medium"
    ],
    correct: 2,
    explanation: "Totipotency is the inherent property of a cell or tissue to give rise to whole plant irrespective of their ploidy level and the form of specialization."
  },
  {
    id: "d111_057",
    subject: "da-111",
    question: "Virus-free plants can be produced through tissue culture technique of:",
    options: [
      "Anther culture for production of haploid plants",
      "Protoplast fusion for somatic hybridization",
      "Endosperm culture to produce triploid plants",
      "Meristem culture as meristems are virus-free"
    ],
    correct: 3,
    explanation: "Virus free plants can be produced through meristem culture. Meristematic cells are typically free from systemic virus infections, making this technique valuable for clean plant propagation."
  },
  {
    id: "d111_058",
    subject: "da-111",
    question: "Cryopreservation involves preservation of cells and tissues at a temperature of:",
    options: [
      "0°C using ice cold water for short term",
      "4°C using refrigeration for medium term",
      "-20°C using standard deep freezer storage",
      "-196°C using liquid nitrogen for long term"
    ],
    correct: 3,
    explanation: "The preservation of cells, tissues, organs in liquid Nitrogen at -196°C is called cryopreservation. Large amounts of germplasm can be stored within a small space under in vitro condition."
  },
  {
    id: "d111_059",
    subject: "da-111",
    question: "Somatic hybrids and cybrids can be produced through the technique of:",
    options: [
      "Anther culture using haploid pollen grains",
      "Protoplast fusion or somatic hybridization method",
      "Embryo rescue technique to overcome barriers",
      "Meristem culture in aseptic tissue conditions"
    ],
    correct: 1,
    explanation: "Somatic hybrids and cybrids can be produced through protoplast fusion (or) somatic hybridization. This allows combining genomes from plants that cannot normally be crossed."
  },
  {
    id: "d111_060",
    subject: "da-111",
    question: "In Row Yield Trial (RYT), for every ten rows of improved variety, one row of:",
    options: [
      "Improved variety is included as a second check",
      "Check variety is included but it is not replicated",
      "Male parent variety is included for comparison",
      "Female parent variety is included as standard"
    ],
    correct: 1,
    explanation: "In Row Yield Trial (RYT), for every ten rows of improved variety one row of check variety is included and it is not a replicated trial."
  },
  {
    id: "d111_061",
    subject: "da-111",
    question: "In Comparative Yield Trial (CYT), entries are evaluated over:",
    options: [
      "One season at a single research location",
      "Two seasons at two or more locations",
      "Five seasons at multi-location research stations",
      "Three seasons with one or more check varieties"
    ],
    correct: 3,
    explanation: "In CYT, entries are evaluated in replication with one or more checks in three seasons. The entries found superior over the checks are tested in Multilocation Trials."
  },
  {
    id: "d111_062",
    subject: "da-111",
    question: "In India, the Chairman of the Central Variety Release Committee is:",
    options: [
      "Director of Agriculture of the concerned State",
      "Production Commissioner, Government of India",
      "Director High Yielding Varieties Programme",
      "Deputy Director General (Crop Science), ICAR"
    ],
    correct: 3,
    explanation: "In Central Variety Release Committee, Deputy Director General (Crop Science) of ICAR is the Chairman. The release proposal of varieties recommended for All India release is put up before CVRC."
  },
  {
    id: "d111_063",
    subject: "da-111",
    question: "In the State Variety Releasing Committee, the Chairman is:",
    options: [
      "Director of Agriculture for field crops only",
      "Deputy Director General (Crop Science), ICAR",
      "Director of Research of State Agriculture University",
      "Director of State Seed Certification Agency"
    ],
    correct: 0,
    explanation: "In case of state variety release committee, Director of Agriculture for field crops and Director of Horticulture for vegetable and horticulture crops is the chairman."
  },
  {
    id: "d111_064",
    subject: "da-111",
    question: "A seed is defined as a matured ovule consisting of an embryonic plant with:",
    options: [
      "A store of food surrounded by a protective coat",
      "Endosperm tissue only without any seed coat",
      "Multiple embryos from polyembryony phenomenon",
      "Fleshy pericarp tissue for seed dispersal"
    ],
    correct: 3,
    explanation: "Seed is a matured ovule that consists of an embryonic plant together with a store of food, all surrounded by a protective coat."
  },
  {
    id: "d111_065",
    subject: "da-111",
    question: "Breeder seed should have a minimum genetic purity of:",
    options: [
      "99.0% genetic purity as certified seed standard",
      "99.5% genetic purity as foundation seed standard",
      "98.0% as the physical purity standard for seeds",
      "100% genetic purity as nucleus seed standard"
    ],
    correct: 3,
    explanation: "Breeder seed provides cent per cent physical and genetic pure seed for production of foundation class. Breeder seed/Nucleus seed = 100% genetic purity."
  },
  {
    id: "d111_066",
    subject: "da-111",
    question: "The colour of the seed certification tag issued for Foundation seed is:",
    options: [
      "Blue (azure blue shade ISI No. 104) colour",
      "Golden yellow tag issued by producing agency",
      "Opel green colour for truthfully labeled seed",
      "White colour tag issued by Seed Certification Agency"
    ],
    correct: 3,
    explanation: "Seed Certification agency issues a white colour certification for foundation class seed. Foundation seed should have minimum genetic purity of 99.5%."
  },
  {
    id: "d111_067",
    subject: "da-111",
    question: "The colour of seed tag issued for Breeder seed is:",
    options: [
      "Golden yellow colour tag by producing agency",
      "White colour issued by seed certification agency",
      "Blue colour as ISI standard azure blue shade",
      "Opel green colour for truthful labeling purposes"
    ],
    correct: 0,
    explanation: "Golden yellow coloured certificate is issued for breeder seed category by the producing agency. Breeder seed is produced under supervision of plant breeder and monitored by a committee."
  },
  {
    id: "d111_068",
    subject: "da-111",
    question: "Certified seed should have a minimum genetic purity of:",
    options: [
      "100% genetic purity like nucleus seed standard",
      "99.5% genetic purity like foundation seed class",
      "97.0% as for sesame and soybean crop seeds",
      "99.0% genetic purity as per certification standards"
    ],
    correct: 3,
    explanation: "Certified seed should have the minimum genetical purity of 99%. Seed Certification Agency issues a blue colour (azure blue, ISI No. 104) certificate for certified seed."
  },
  {
    id: "d111_069",
    subject: "da-111",
    question: "Varietal deterioration due to natural crossing is a major concern in:",
    options: [
      "Self-pollinated crops like paddy and groundnut",
      "Vegetatively propagated crops like potato",
      "Apomictic crops like mango and citrus trees",
      "Cross fertilized crops like maize and bajra"
    ],
    correct: 3,
    explanation: "Natural crossing can be an important source of varietal deterioration in sexually propagated crops. It can be a major source of contamination in cross fertilized crops."
  },
  {
    id: "d111_070",
    subject: "da-111",
    question: "Mechanical mixtures, the most important cause of varietal deterioration, occur at:",
    options: [
      "Time of sowing using the same drill for varieties",
      "Time of applying fertilizers during crop growth",
      "Time of irrigation during the crop season only",
      "Time of applying pesticides and fungicides"
    ],
    correct: 0,
    explanation: "Mechanical mixtures often take place at the time of sowing if more than one variety is sown with the same seed drill, through volunteer plants, or through adjacent field varieties."
  },
  {
    id: "d111_071",
    subject: "da-111",
    question: "Self-pollinated crops require a minimum isolation distance of approximately:",
    options: [
      "400 meters for foundation seed production fields",
      "200 meters for certified seed production fields",
      "100 meters for both seed production classes",
      "3 meters generally for foundation and certified seed"
    ],
    correct: 3,
    explanation: "Self pollinated crop requires low isolation distance (3 meters generally). Cross pollinated crops require high isolation distance. Often cross pollinated crops require moderate isolation distance."
  },
  {
    id: "d111_072",
    subject: "da-111",
    question: "Time isolation in maize seed production requires sowing the seed crop:",
    options: [
      "7 days ahead of contaminating crop fields",
      "14 days ahead of the contaminating crop fields",
      "35 days ahead of the contaminating crop fields",
      "21 days ahead of the contaminating maize crops"
    ],
    correct: 3,
    explanation: "In Maize, seed crop should be planted ahead of 21 days than other maize crops for time isolation. Flowering of early planting and present planting crops should not coincide."
  },
  {
    id: "d111_073",
    subject: "da-111",
    question: "Rouging in seed production refers to the removal of:",
    options: [
      "Diseased plants only from the seed crop field",
      "Weed plants from around the seed crop boundary",
      "Pollen shedders from both male and female rows",
      "Off-type plants phenotypically different from variety"
    ],
    correct: 3,
    explanation: "Removal of off type (phenotypically different) plant from the field of an improved variety is known as rouging. Rouging is compulsory to maintain the genetic purity of cross pollinated crops."
  },
  {
    id: "d111_074",
    subject: "da-111",
    question: "In Rice, the botanical name is Oryza sativa and chromosome number 2n is:",
    options: [
      "20 chromosomes as in maize crop plants",
      "22 chromosomes found in many diploid crops",
      "26 chromosomes in the diploid genome",
      "24 chromosomes in the rice plant genome"
    ],
    correct: 3,
    explanation: "Rice botanical name is Oryza sativa, chromosome number [2n] = 24, Family: Poaceae, Inflorescence: Panicle, Pollination: Self-Pollination."
  },
  {
    id: "d111_075",
    subject: "da-111",
    question: "In rice, the pollen viability duration under field conditions is only about:",
    options: [
      "60 minutes under normal field temperature",
      "30 minutes under humid field conditions",
      "45 minutes at peak flowering time daily",
      "10 minutes under field temperature conditions"
    ],
    correct: 3,
    explanation: "Pollen viability in rice is 10 minutes. This very short pollen viability makes timing of pollination critical in rice hybridization and hybrid seed production."
  },
  {
    id: "d111_076",
    subject: "da-111",
    question: "In paddy, the favourable relative humidity for flowering is:",
    options: [
      "40 to 50 percent for optimal pollen viability",
      "50 to 60 percent for stigma receptivity",
      "60 to 70 percent for anther dehiscence",
      "70 to 80 percent for optimal seed setting"
    ],
    correct: 3,
    explanation: "Favourable RH for flowering in rice is 70-80%. Temperature favorable for flowering is 24-28°C. Stigma receptivity lasts 3 days while pollen viability is only 10 minutes."
  },
  {
    id: "d111_077",
    subject: "da-111",
    question: "In hybrid rice seed production using CGMS, the A-line is maintained by crossing with:",
    options: [
      "R-line restorer to produce male fertile hybrids",
      "Any commercial variety for hybrid seed production",
      "F1 hybrid to maintain the male sterile trait",
      "B-line or maintainer line for A-line maintenance"
    ],
    correct: 3,
    explanation: "In hybrid rice, A-line (male sterile line) is maintained by crossing with B-line (maintainer line). For producing hybrid seed, A-line is crossed with R-line (restorer line)."
  },
  {
    id: "d111_078",
    subject: "da-111",
    question: "In rice hybrid seed production, the row ratio of female to male parents adopted is:",
    options: [
      "4:2 (female:male) ratio for higher seed yield",
      "6:2 (female:male) for maximum seed production",
      "2:1 (female:male) standard ratio for all hybrids",
      "8:2 (A-line:R-line) currently adopted in practice"
    ],
    correct: 3,
    explanation: "Practically a row ratio of 8:2 (A x R) is currently adopted for hybrid seed production in rice. First plant male lines (B/R) and later female lines (A)."
  },
  {
    id: "d111_079",
    subject: "da-111",
    question: "The egg floatation technique in paddy uses salt water of specific gravity:",
    options: [
      "1.00 which is plain water without any salt",
      "1.10 using 200g of salt per 1000 ml water",
      "1.05 using 150g of salt per 1000 ml water",
      "1.03 using 120g of salt per 1000 ml water"
    ],
    correct: 3,
    explanation: "Egg floatation technique uses specific gravity of 1.03 (120g of salt in 1000ml of water). The sinkers are good seeds while the floaters are less vigorous and dead seeds."
  },
  {
    id: "d111_080",
    subject: "da-111",
    question: "GA3 application in hybrid rice seed production primarily helps to:",
    options: [
      "Reduce plant height for better lodging resistance",
      "Increase tillering for more productive panicles",
      "Suppress weed growth in the seed production field",
      "Fully exert panicles from flag leaves for pollination"
    ],
    correct: 3,
    explanation: "Application of GA3 increases the internode length and the panicles will be fully exerted from the flag leaves. It also increases the duration of floret opening and stigma receptivity."
  },
  {
    id: "d111_081",
    subject: "da-111",
    question: "In Maize, the botanical name is Zea mays and chromosome number 2n is:",
    options: [
      "20 chromosomes as a diploid monoecious crop",
      "24 chromosomes as in related grass species",
      "14 chromosomes as in barley crop species",
      "28 chromosomes as in many hybrid corn types"
    ],
    correct: 0,
    explanation: "Maize botanical name is Zea mays, Chromosome number: 2n=20, Botanical Family: Poaceae. It is a monoecious cross-pollinated crop with protandry as special character."
  },
  {
    id: "d111_082",
    subject: "da-111",
    question: "In maize, the special character that promotes cross pollination is called:",
    options: [
      "Protogyny where pistil matures before anthers",
      "Cleistogamy where flowers never open at all",
      "Protandry where anthers mature before pistil",
      "Homogamy where both mature simultaneously"
    ],
    correct: 2,
    explanation: "Protandry is a special character of maize. Pollen shedding begins 1 to 3 days before the silk emerges from the cob. This promotes cross pollination in maize."
  },
  {
    id: "d111_083",
    subject: "da-111",
    question: "In maize, detasseling refers to the removal of:",
    options: [
      "Female inflorescence (cob) from the female plant",
      "Leaves from the plant for better light penetration",
      "Roots from the plant for replanting seedlings",
      "Male inflorescence (tassel) from the female parent"
    ],
    correct: 3,
    explanation: "Detasseling is the removal of tassel (male inflorescence) from the female parent in hybrid maize seed production. In maize, the male inflorescence is called tassel and its removal is detasseling."
  },
  {
    id: "d111_084",
    subject: "da-111",
    question: "In maize double cross hybrid production, the number of inbred lines used is:",
    options: [
      "Two inbred lines for a single cross hybrid",
      "Three inbred lines for three-way cross hybrid",
      "Six inbred lines for complex multiple crossing",
      "Four inbred lines for double cross production"
    ],
    correct: 3,
    explanation: "Double cross in maize is a cross between two single crosses: (A x B) x (C x D). For production of double cross, four inbreds (A, B, C & D) are used."
  },
  {
    id: "d111_085",
    subject: "da-111",
    question: "In Sorghum (Jowar), the flowering starts from the tip of panicle and proceeds:",
    options: [
      "Upward (acropetal) from base to the apex tip",
      "From middle outward toward the panicle periphery",
      "Simultaneously across all branches of the panicle",
      "Downward (basipetal) from tip toward the base"
    ],
    correct: 3,
    explanation: "In Sorghum, flowering starts from the tip of the panicle and proceeds downwards (basipetal). Flowering completes in 7 days and pollen is viable for 10 to 20 minutes under field conditions."
  },
  {
    id: "d111_086",
    subject: "da-111",
    question: "In Bajra, the extent of cross pollination is about 80% due to:",
    options: [
      "Protandry where anthers shed pollen before silk",
      "Male sterility preventing self pollination always",
      "Insect activity promoting heavy cross pollination",
      "Protogynous condition with wind as pollinating agent"
    ],
    correct: 3,
    explanation: "Bajra is predominantly a cross pollinated crop with 80% cross pollination due to protogynous condition. The pollinating agent is wind."
  },
  {
    id: "d111_087",
    subject: "da-111",
    question: "In Red gram, the extent of natural crossing recorded is up to:",
    options: [
      "10 to 20 percent cross pollination by insects",
      "5 to 10 percent cross pollination by bees",
      "80 percent cross pollination by wind only",
      "65 percent cross pollination by bees and insects"
    ],
    correct: 3,
    explanation: "Red gram is partially self and cross pollinated. Although anthers burst before flowers open, there is considerable cross-fertilization by bees and other insects. Natural crossing up to sixty five percent has been recorded."
  },
  {
    id: "d111_088",
    subject: "da-111",
    question: "Sunflower hybrid seed fields must be isolated from other sunflower by at least:",
    options: [
      "200 meters for foundation and 100m certified",
      "300 meters for foundation and 200m certified",
      "600–1000 meters for A-line maintenance seed",
      "50 meters for foundation and 30m certified seed"
    ],
    correct: 2,
    explanation: "The seed fields must be isolated from other sunflower fields, and from wild sunflower species by 600-1000 meters for maintenance of A-line and 400 meters for hybrid seed production (AxR)."
  },
  {
    id: "d111_089",
    subject: "da-111",
    question: "Staggered sowing in hybrid seed production ensures:",
    options: [
      "Higher fertilizer utilization by both parental lines",
      "Better weed control in the seed production field",
      "Reduction in isolation distance requirements",
      "Synchronization of flowering between male and female"
    ],
    correct: 3,
    explanation: "Staggered sowing adjusts sowing of male and female parents so that both come to flowering at the same time. Late flowering parent should be sown first for synchronization."
  },
  {
    id: "d111_090",
    subject: "da-111",
    question: "In rice seed production, a minimum of how many field inspections should be conducted?",
    options: [
      "Two field inspections before and at harvest",
      "Three inspections at pre-flowering and harvest",
      "Five inspections from seedling to harvest stage",
      "Four inspections from planting through harvest"
    ],
    correct: 3,
    explanation: "A minimum of four field inspections should be conducted in rice seed production: first before flowering, second and third during flowering, and fourth before harvesting."
  },
  {
    id: "d111_091",
    subject: "da-111",
    question: "For rice foundation seed, the maximum permissible off types in seed field is:",
    options: [
      "0.05% off types which is the foundation seed limit",
      "0.10% off types allowed in foundation seed fields",
      "0.20% off types allowed in certified seed fields",
      "0.01% off types as the strictest possible standard"
    ],
    correct: 0,
    explanation: "For rice foundation seed varieties, off types maximum limit is 0.05% and for certified seed it is 0.20%. For wild rice, the limit is 0.01% for foundation and 0.02% for certified."
  },
  {
    id: "d111_092",
    subject: "da-111",
    question: "Paddy seeds should be dried for storage to a moisture content of:",
    options: [
      "15 to 17 percent for short term bag storage",
      "13 percent for better storage of paddy seed",
      "17 to 20 percent at physiological maturity",
      "10 to 12 percent for fumigation treatment"
    ],
    correct: 1,
    explanation: "The seeds are dried in a threshing floor with adequate stirring known as tempering. The seeds are dried to 13% moisture for better storage of paddy seed."
  },
  {
    id: "d111_093",
    subject: "da-111",
    question: "In maize, the physical purity standard for foundation and certified seed is:",
    options: [
      "98.0% pure seed as minimum purity standard",
      "97.0% for sesame soybean and jute seed crops",
      "99.0% as for ladies finger and maize seed",
      "99.5% as for foundation class seed production"
    ],
    correct: 0,
    explanation: "In maize seed standards, Pure seed maximum for both foundation seed and certified seed is 98.0% for all classes including inbreds and hybrids."
  },
  {
    id: "d111_094",
    subject: "da-111",
    question: "Long term seed storage moisture content should be maintained at:",
    options: [
      "Long term Storage: 6–8% moisture content",
      "Short term storage: 6 to 8% moisture level",
      "Long term storage: 10 to 13% moisture content",
      "Long term storage: 15 to 17% moisture content"
    ],
    correct: 0,
    explanation: "For seed storage: Long term Storage moisture should be 6-8% and Short term Storage moisture should be 10-13%. Lower moisture ensures longer seed viability."
  },
  {
    id: "d111_095",
    subject: "da-111",
    question: "In maize, germination minimum standard for both foundation and certified seed is:",
    options: [
      "90% germination as the minimum standard",
      "85% germination as the minimum standard",
      "75% germination as the minimum standard",
      "80% germination as the minimum standard"
    ],
    correct: 3,
    explanation: "In maize seed standards, Germination (Minimum) is 80.0% for foundation seed (inbreds and hybrids) and certified seed. Moisture maximum is 12.0% for all classes."
  },
  {
    id: "d111_096",
    subject: "da-111",
    question: "Nitrogen deficiency in paddy appears first on the older leaves as:",
    options: [
      "Interveinal chlorosis leaving veins green initially",
      "Brown scorching along margins spreading inward",
      "Reddish brown pigmentation in 3-4 week seedlings",
      "Light green to pale yellow coloration due to proteolysis"
    ],
    correct: 3,
    explanation: "Nitrogen deficiency: Due to high mobility of N in plants, its deficiency symptoms first appear on the older leaves in the form of light green to pale yellow coloration due to proteolysis."
  },
  {
    id: "d111_097",
    subject: "da-111",
    question: "Khaira disease in paddy is caused by deficiency of which micronutrient?",
    options: [
      "Zinc deficiency showing reddish brown symptoms",
      "Iron deficiency showing interveinal chlorosis",
      "Magnesium deficiency causing yellowing patterns",
      "Boron deficiency causing distorted leaf growth"
    ],
    correct: 0,
    explanation: "Khaira disease is caused by zinc deficiency. The first symptom appears in 3-4 week old seedlings when young leaves develop reddish brown pigmentation, appearing first in the middle of leaves."
  },
  {
    id: "d111_098",
    subject: "da-111",
    question: "Objectionable weed in paddy (rice) seed crop is:",
    options: [
      "Chicory (Chicorum intybus) found in berseem",
      "Argemone mexicana found in mustard crop",
      "Convolvulus arvensis found in wheat fields",
      "Wild paddy (Oryza sativa var. Fatua) rice weed"
    ],
    correct: 3,
    explanation: "The objectionable weed in paddy seed crop is Wild paddy (Oryza sativa var. Fatua). In wheat, it is Convolvulus arvensis (Hiran kuri). In berseem, it is Chicory."
  },
  {
    id: "d111_099",
    subject: "da-111",
    question: "The designated disease for certification in Pearl Millet includes Ergot caused by:",
    options: [
      "Ustilago tritici the loose smut pathogen",
      "Alternaria sp. causing blight in crops",
      "Sphacelotheca sorghii causing grain smut",
      "Claviceps microcephala the ergot pathogen"
    ],
    correct: 3,
    explanation: "In Pearl Millet, designated diseases include Grain smut (Tolyposporium penicillariae), Green ear (Sclerospora graminicola), and Ergot caused by Claviceps microcephala."
  },
  {
    id: "d111_100",
    subject: "da-111",
    question: "Differences between seed and grain: seed unlike grain must be:",
    options: [
      "Produced in large quantities on commercial basis",
      "Used for human consumption as food material",
      "Free from pesticide treatment to ensure safety",
      "Compulsorily certified or truthfully labelled always"
    ],
    correct: 3,
    explanation: "Seed should be compulsorily certified/truthful labelled. Grain has no such condition. Seed should be viable, have maximum genetic and physical purity, and should satisfy minimum seed certification standards."
  }
];
