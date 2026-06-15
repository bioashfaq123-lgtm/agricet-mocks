import { Question } from "@/types";

// DA-111: Basic Principles of Plant Breeding, Seed Production, Testing & Certification
// 100 questions strictly from pdf_da111.txt (PJTSAU Diploma syllabus)
// Answer distribution: Q1→0, Q2→2, Q3→1, Q4→3 repeating = 25 each A/B/C/D

export const da111Questions: Question[] = [
  {
    id: "d111_001",
    subject: "da-111",
    question: "Plant breeding is defined as the art, science and technology of:",
    options: ["Improving the genetic make-up of plants for human use", "Applying fertilizers for maximum crop production", "Studying the ecology of wild plant species", "Cultivating plants using modern irrigation methods"],
    correct: 0,
    explanation: "Plant breeding is defined as an art, a science, and technology of improving the genetic make-up of plants in relation to their economic use for mankind."
  },
  {
    id: "d111_002",
    subject: "da-111",
    question: "The process of bringing a wild species under human management is called:",
    options: ["Selection of plants from natural habitats", "Domestication of wild plant species", "Mutation breeding of crop plants", "Hybridization of wild plants with cultivated ones"],
    correct: 1,
    explanation: "The process of bringing a wild species under human management is referred to as domestication. Domestication may be the most basic method of plant breeding."
  },
  {
    id: "d111_003",
    subject: "da-111",
    question: "Mendel's laws of inheritance were rediscovered in the year:",
    options: ["1902 by Sutton and Boveri in chromosomes", "1900 by scientists working with pea plants", "1850 as published by Mendel in journal", "1850 by Gregor John Mendel in Vienna"],
    correct: 1,
    explanation: "In 1900, Mendel's laws of inheritance were rediscovered and laid the foundation for the development of plant breeding."
  },
  {
    id: "d111_004",
    subject: "da-111",
    question: "Sir T.S. Venkatraman is known for his contribution to sugarcane breeding called:",
    options: ["Developing dwarf sugarcane varieties for India", "Introducing tropical noble cane into Indian agriculture", "Transferring high sugar content from tropical to North Indian canes", "Establishing the Sugarcane Breeding Institute at Coimbatore"],
    correct: 2,
    explanation: "Sir T.S. Venkatraman transferred thick stem and high sugar contents from tropical noble cane to North Indian canes. This process is known as noblization of sugarcane."
  },
  {
    id: "d111_005",
    subject: "da-111",
    question: "Who proposed the theory of natural evolution that greatly advanced botanical sciences?",
    options: ["Charles Darwin, who proposed natural selection theory", "Hugo de Vries, who discovered plant mutations", "Watson and Crick, who described DNA structure", "Gregor Mendel, who studied pea plant genetics"],
    correct: 0,
    explanation: "Charles Darwin proposed the theory of natural evolution. Enormous development in the branches of botany was achieved in the 20th century following Darwin's work."
  },
  {
    id: "d111_006",
    subject: "da-111",
    question: "The term 'mutation' was first used by Hugo de Vries while working on:",
    options: ["Nicotiana tabacum (Tobacco) plants", "Oenothera Lamarkiana (Evening Prime Rose)", "Zea mays (Maize) plants", "Pisum sativum (Garden Pea) plants"],
    correct: 1,
    explanation: "The term mutation was coined by Hugo de Vries in 1900 for the first time while working on Oenothera Lamarkiana (Evening Prime Rose) to describe new varieties."
  },
  {
    id: "d111_007",
    subject: "da-111",
    question: "The Chromosome theory of genetics was proposed by:",
    options: ["Gregor Mendel in the year 1850", "Sutton and Boveri in the year 1902", "Hugo de Vries in the year 1900", "Watson and Crick in year 1953"],
    correct: 1,
    explanation: "Sutton and Boveri (1902) proposed the Chromosome theory, a fundamental unifying theory of genetics which identifies chromosomes as the carriers of genetic material."
  },
  {
    id: "d111_008",
    subject: "da-111",
    question: "The double helix structure of the DNA molecule was proposed by:",
    options: ["Fraenkel-Conrat who proposed RNA structure", "Nirenberg and Khorana for nucleic acid code", "Hugo de Vries and Stadler in mutation work", "Watson and Crick in the year 1953"],
    correct: 3,
    explanation: "Watson and Crick (1953) proposed the double helix structure of the DNA molecule, which became the foundation of molecular genetics and modern plant breeding."
  },
  {
    id: "d111_009",
    subject: "da-111",
    question: "M.S. Swaminathan is credited with developing high yielding varieties of which crops?",
    options: ["Maize, Sorghum, Bajra and Cotton", "Paddy, Sugarcane, Cotton and Groundnut", "Wheat, Barley, Rye and Triticale", "Wheat, Rice, Potato and Jute in India"],
    correct: 3,
    explanation: "M.S. Swaminathan was responsible for the green revolution in India and developed high yielding varieties of Wheat, Rice, Potato and Jute."
  },
  {
    id: "d111_010",
    subject: "da-111",
    question: "The Sugarcane Breeding Institute was established in 1912 at:",
    options: ["Hyderabad in Andhra Pradesh for Jowar research", "Simla for potato research and development", "Coimbatore due to uniform flowering conditions", "New Delhi at IARI for cereal breeding work"],
    correct: 2,
    explanation: "Sugarcane Breeding Institute was established in 1912 at Coimbatore. Due to uniform flowering at Coimbatore, crossing work on sugar cane was started there."
  },
  {
    id: "d111_011",
    subject: "da-111",
    question: "In India, the first maize hybrid 'Ganga-1' was released in the year:",
    options: ["1961 in collaboration with Rockfeller Foundation", "1965 when AICRP on rice was started", "1964 at IARI in collaboration with Rockfeller", "1957 when coordinated research program started"],
    correct: 0,
    explanation: "Established Co-ordinated research programme in 1957 at IARI, New Delhi. In collaboration with Rockfeller Foundation, released first hybrid Ganga-1 in 1961."
  },
  {
    id: "d111_012",
    subject: "da-111",
    question: "The Theophrastus (300 BC) is revered in botany as the:",
    options: ["Father of Agriculture for ancient farming texts", "Father of Botany for his plant classification", "Father of Ecology for his environmental work", "Father of Genetics for his inheritance work"],
    correct: 1,
    explanation: "Theophrastus (300 BC) is known as the Father of Botany. His works on plant taxonomy and morphology laid the foundation for botanical science."
  },
  {
    id: "d111_013",
    subject: "da-111",
    question: "The pureline theory was proposed by W.L. Johannsen based on studies with:",
    options: ["Wheat variety in European breeding programs", "Paddy variety at International Rice Institute", "Maize variety in Illinois long-term studies", "Princess variety of Phaseolus vulgaris beans"],
    correct: 3,
    explanation: "The concept of pureline was proposed by Johannsen in 1903 on the basis of his studies with princess variety of beans (Phaseolus vulgaris) and it is applicable to self pollinated crops."
  },
  {
    id: "d111_014",
    subject: "da-111",
    question: "The term 'heterosis' was coined by G.H. Shull in the year:",
    options: ["1902 when Sutton-Boveri proposed chromosome theory", "1914 based on his maize hybridization experiments", "1900 when Hugo de Vries worked with mutations", "1953 when Watson-Crick described DNA structure"],
    correct: 1,
    explanation: "G.H. Shull (1914) coined the term heterosis. In maize, loss of vigor occurs due to self pollination and hybrid vigor is more due to cross pollination."
  },
  {
    id: "d111_015",
    subject: "da-111",
    question: "The major objective of plant breeding regarding maturity duration is to develop:",
    options: ["Varieties requiring more crop management period", "Early maturing varieties permitting new crop rotations", "Late maturing varieties to increase crop duration", "Long duration varieties for maximum biomass yield"],
    correct: 1,
    explanation: "Earliness is a most desirable character. It requires less crop management period, less insecticidal sprays, permits new crop rotations and often extends the crop area."
  },
  {
    id: "d111_016",
    subject: "da-111",
    question: "In Cotton, the maturity duration has been reduced through plant breeding from:",
    options: ["360 days to 270 days through intensive selection", "270 days to 170 days through breeding programs", "200 days to 100 days by developing early varieties", "270 days to 120 days by hybridization method"],
    correct: 1,
    explanation: "Maturity has been reduced from 270 days to 170 days in cotton, from 270 days to 120 days in pigeonpea, and from 360 days to 270 days in sugarcane through breeding."
  },
  {
    id: "d111_017",
    subject: "da-111",
    question: "Neurotoxin causing paralysis of lower limbs is found in which crop plant?",
    options: ["Gossypium hirsutum (Cotton) seed kernel", "Groundnut (Arachis hypogaea) seed pods", "Brassica sp. causing harmful erucic acid", "Khesari (Lathyrus sativus) food legume crop"],
    correct: 3,
    explanation: "It is essential to develop varieties free from toxic compounds. Removal of neurotoxin in Khesari (Lathyrus sativus) which leads to paralysis of lower limbs is necessary."
  },
  {
    id: "d111_018",
    subject: "da-111",
    question: "The outermost whorl of a flower containing green leafy structures is called:",
    options: ["Androecium consisting of male reproductive parts", "Gynoecium with stigma, style and ovary parts", "Calyx consisting of sepals protecting the bud", "Corolla consisting of brightly coloured petals"],
    correct: 2,
    explanation: "The outermost whorl of the flower has green, leafy structures known as sepals. The sepals, collectively called the calyx, help to protect the unopened bud."
  },
  {
    id: "d111_019",
    subject: "da-111",
    question: "In monocot flowers, petals usually number:",
    options: ["Three or multiples of three per flower", "Two or multiples of two per flower", "Four or multiples of four per flower", "Five or multiples of five per flower"],
    correct: 0,
    explanation: "In monocots, petals usually number three or multiples of three; in dicots, the number of petals is four or five, or multiples of four and five."
  },
  {
    id: "d111_020",
    subject: "da-111",
    question: "The male reproductive structure of a flower consisting of stamens is called:",
    options: ["Androecium containing microsporangia in anthers", "Calyx composed of green protective sepals", "Gynoecium with stigma, style and ovary", "Corolla of brightly coloured attractive petals"],
    correct: 0,
    explanation: "The third whorl contains the male reproductive structures and is known as the androecium. The androecium has stamens with anthers that contain the microsporangia."
  },
  {
    id: "d111_021",
    subject: "da-111",
    question: "Double fertilization is a unique process that occurs in:",
    options: ["Angiosperms only among all plant groups", "Fungi such as mushrooms and bread mold", "Ferns and mosses in moist environments", "Gymnosperms such as pine and cycads only"],
    correct: 0,
    explanation: "The two acts of fertilization (syngamy with egg and triple fusion with polar nuclei) constitute the process of double fertilization. Double fertilization occurs in angiosperms only."
  },
  {
    id: "d111_022",
    subject: "da-111",
    question: "Placentation refers to the attachment of:",
    options: ["Filament of stamen connecting to anther", "Style connecting ovary to the stigma", "Ovules inside the ovary wall surface", "Pollen tube entering the embryo sac"],
    correct: 2,
    explanation: "Placentation is the attachment of ovules inside the ovary. The ovules inside a flower's ovary are attached via funiculi, which provides nutrients to the developing embryo."
  },
  {
    id: "d111_023",
    subject: "da-111",
    question: "The study of pollen grains is known as:",
    options: ["Pomology, the study of fruit crops", "Palynology, the science of pollen study", "Phenology, the study of seasonal events", "Paedology, the study of soil profiles"],
    correct: 1,
    explanation: "Study of Pollen grains is called Palynology. Palynology was developed by Vode House, P.K.K. Nair, Vishnu mitre, Tharil, CGK Ramanujam, Sunil Malchnada."
  },
  {
    id: "d111_024",
    subject: "da-111",
    question: "Each pollen mother cell (PMC) after meiotic division produces how many microspores?",
    options: ["Two microspores through first meiotic division", "Eight microspores from two meiotic divisions", "Six microspores arranged in two triplets", "Four microspores that become pollen grains"],
    correct: 3,
    explanation: "Pollen Mother Cells are in diploid (2n) condition and each PMC produces four microspores. Each microspore after thickening of the wall transforms into a pollen grain."
  },
  {
    id: "d111_025",
    subject: "da-111",
    question: "In megasporogenesis, each megaspore mother cell produces four megaspores, of which:",
    options: ["All four megaspores develop into embryo sacs", "Two megaspores develop into functional embryos", "Three megaspores develop into endosperm cells", "Three degenerate leaving one functional megaspore"],
    correct: 3,
    explanation: "Each MMC produces four megaspores out of which three degenerate resulting in a single functional megaspore which later develops into the embryo sac."
  },
  {
    id: "d111_026",
    subject: "da-111",
    question: "The female gametophyte in angiosperms is also called the:",
    options: ["Embryo sac or megagametophyte structure", "Integument protecting the embryo sac tissue", "Nucellus tissue enclosing the ovule body", "Perisperm residual tissue in mature seed"],
    correct: 0,
    explanation: "The surviving haploid megaspore undergoes mitosis to produce an eight-nucleate, seven-cell female gametophyte, also known as the megagametophyte or embryo sac."
  },
  {
    id: "d111_027",
    subject: "da-111",
    question: "The finger-like protruded structures present on synergids are called:",
    options: ["Funiculus attaching ovule to the placenta", "Raphe as a ridge on the ovule body", "Filiform apparatus aiding pollen tube guidance", "Chalazal end the basal end of ovule"],
    correct: 2,
    explanation: "Finger like protruded structures present on synergids are called as filiform apparatus. The synergids help guide the pollen tube for successful fertilization."
  },
  {
    id: "d111_028",
    subject: "da-111",
    question: "Non-endospermic seeds, where endosperm is absent at maturity, include:",
    options: ["Paddy, Maize and Castor as examples", "Sunflower, Sesame and Mustard as examples", "Wheat, Jowar and Barley as examples", "Pea, Beans and Chick Pea as examples"],
    correct: 3,
    explanation: "Non-endospermic seeds include Pea, Beans, Chick Pea. Endosperm is not present in mature seeds as it is utilized in the formation of the seed itself during development."
  },
  {
    id: "d111_029",
    subject: "da-111",
    question: "Autogamy refers to the transfer of pollen grains from:",
    options: ["One flower to flowers on the same plant", "Anther to stigma of the same flower itself", "Anther to stigma of flowers of another plant", "Wind blown pollen to distant plant stigmas"],
    correct: 1,
    explanation: "Autogamy or self-pollination is the transfer of pollen grains from the anther to the stigma of the same flower. It results in self-fertilization and homozygosity."
  },
  {
    id: "d111_030",
    subject: "da-111",
    question: "Geitonogamy is cross pollination where pollen from one flower falls on:",
    options: ["Stigmas only in insect-pollinated crop plants", "The stigma of flowers of a different species", "The stigma of a genetically different plant", "Stigmas of other flowers of the same plant"],
    correct: 3,
    explanation: "Geitonogamy is when pollen from a flower of one plant falls on the stigmas of other flowers of the same plant, e.g., in Maize."
  },
  {
    id: "d111_031",
    subject: "da-111",
    question: "Homogamy promotes self-pollination by ensuring:",
    options: ["Pistil matures before anthers in the flower", "Simultaneous maturation of anthers and stigma", "Anthers mature before pistil in the flower", "Spatial separation of stigma and anthers always"],
    correct: 1,
    explanation: "Maturation of anthers and stigma of a flower at the same time is called homogamy. As a rule, homogamy is essential for self-pollination. Eg: Caltha."
  },
  {
    id: "d111_032",
    subject: "da-111",
    question: "Cleistogamy ensures complete self-pollination because:",
    options: ["Pistil matures much before anthers dehisce", "Stigma becomes receptive after flower opens", "Flowers open before the pollen is released", "Flowers remain closed preventing foreign pollen"],
    correct: 3,
    explanation: "In cleistogamy, flowers do not open at all. This ensures complete self-pollination since foreign pollen cannot reach the stigma of a closed flower."
  },
  {
    id: "d111_033",
    subject: "da-111",
    question: "Protogyny as a mechanism for cross pollination refers to:",
    options: ["Anthers mature earlier than pistil in flower", "Physical separation of stamens from stigma", "Pistil maturing before anthers in same flower", "Simultaneous maturation of both male and female"],
    correct: 2,
    explanation: "When pistil matures before anthers, it is called protogyny. It is found in pearl millet, solanum. It promotes cross pollination even in hermaphrodite species."
  },
  {
    id: "d111_034",
    subject: "da-111",
    question: "Self incompatibility prevents self-pollination by causing failure of:",
    options: ["Pollen release from anthers in bisexual flowers", "Stigma to become receptive in self pollinated crops", "Functional pollen to fertilize the same flower", "Anther formation during early flower development"],
    correct: 2,
    explanation: "Self incompatibility is the inability of fertile pollens to fertilize the same flower or any flower of the same plant. It prevents self-pollination and promotes cross pollination."
  },
  {
    id: "d111_035",
    subject: "da-111",
    question: "Pollination of Vallisnaria plant species is carried out by:",
    options: ["Water called epihydrophily or hypohydrophily", "Insects called entomophily in Cestrum plants", "Birds called ornithophily in Bignonia plants", "Wind called anemophily in paddy crops"],
    correct: 0,
    explanation: "Vallisnaria is pollinated by water (epihydrophily), while Zostera is pollinated by water (hypohydrophily). These are examples of hydrophily or water pollination."
  },
  {
    id: "d111_036",
    subject: "da-111",
    question: "Apomixis is defined as the development of seed without:",
    options: ["Formation of embryo sac from megaspore", "Growth of pollen tube in the style", "Formation of ovule inside the ovary", "Sexual fusion or fertilization of gametes"],
    correct: 3,
    explanation: "Apomixis refers to the development of seed without sexual fusion (fertilization). In apomixis embryo develops without fertilization. Thus apomixis is an asexual means of reproduction."
  },
  {
    id: "d111_037",
    subject: "da-111",
    question: "Adventive embryony is the development of embryo from:",
    options: ["Megaspore mother cell after meiotic division", "Diploid cells of nucellus or integuments", "Unfertilized egg cell of the embryo sac", "Synergids or antipodal cells only"],
    correct: 1,
    explanation: "Adventive embryony is the development of embryo directly from the diploid cells of ovule lying outside the embryosac belonging to either nucellus or integuments. E.g., mango, citrus."
  },
  {
    id: "d111_038",
    subject: "da-111",
    question: "Cytoplasmic Male Sterility (CMS) is most useful for hybrid seed production in:",
    options: ["Sunflower, where seeds are the economic product", "Maize, where both grain and fodder are needed", "Bajra, where grains are the economic product", "Onion, where vegetative part is the economic product"],
    correct: 3,
    explanation: "Cytoplasmic male sterility may be utilized for producing hybrid seed in certain ornamental species, or in species where a vegetative part is of economic value. E.g., Onion."
  },
  {
    id: "d111_039",
    subject: "da-111",
    question: "Cytoplasmic-Genetic Male Sterility (CGMS) system is used in hybrid breeding of:",
    options: ["Tomato, Barley, Brinjal, Paddy and Soybean", "Bajra, Carrot, Chillies, Maize, Wheat and Sunflower", "Onion, Garlic, Carrot, Radish and Beet crops", "Cotton, Sunflower, Groundnut and Sesame crops"],
    correct: 1,
    explanation: "Cytoplasmic-genetic male sterility (CGMS) is used in Bajra, Carrot, Chillies, Maize, Wheat, Paddy, Jowar and Sunflower for hybrid seed production."
  },
  {
    id: "d111_040",
    subject: "da-111",
    question: "Vegetative reproduction results in offspring that are:",
    options: ["Genetically different from the parent plant", "More variable than sexually produced offspring", "Produced through sexual gamete fusion always", "Identical in all characters to the parent plant"],
    correct: 3,
    explanation: "Vegetative reproduction involves only one parent and fusion of gametes is absent. Progeny resemble the parents. This is called vegetative reproduction or vegetative propagation."
  },
  {
    id: "d111_041",
    subject: "da-111",
    question: "A rhizome is a specialized stem that grows:",
    options: ["Upward as an aerial stem producing bulbils", "Above ground as horizontal stem rooting at nodes", "Horizontally just below or on the ground surface", "Vertically underground storing food in tubers"],
    correct: 2,
    explanation: "A rhizome is a specialized stem structure in which the main axis of the plant grows horizontally just below or on the surface of the ground. E.g., Bamboo, Banana, Iris."
  },
  {
    id: "d111_042",
    subject: "da-111",
    question: "Sugarcane stem pieces used for vegetative propagation are called:",
    options: ["Canes or setts used for vegetative multiplication", "Tubers with nodes arranged spirally for budding", "Bulbs that consist predominantly of modified leaves", "Suckers arising from underground stem parts"],
    correct: 0,
    explanation: "Plant parts used in vegetative propagation: Sugarcane: Canes; Rose: Cuttings; Potato: Tubers; Banana: Suckers; Onion: Bulbs."
  },
  {
    id: "d111_043",
    subject: "da-111",
    question: "Colchicine used for chromosome doubling is derived from which plant?",
    options: ["Taxus baccata from the Taxaceae conifer family", "Colchicum autumnale belonging to the Liliaceae family", "Datura stramonium in the Solanaceae family", "Atropa belladonna from the Solanaceae family"],
    correct: 1,
    explanation: "Colchicine belonged to Liliaceae family. It is an alkaloid derived from the seeds of plant Colchicum autumnale. It inhibits spindle fibre formation during meiosis without inhibiting chromosome replication."
  },
  {
    id: "d111_044",
    subject: "da-111",
    question: "Commercial bread wheat (Triticum aestivum) is an example of a:",
    options: ["Hexaploid species with six genome sets", "Diploid species with two complete genomes", "Triploid hybrid produced for sterile fruit", "Tetraploid species with four genome sets"],
    correct: 0,
    explanation: "Commercial bread wheat - Triticum aestivum is an example of hexaploid. It has 6 genomes (6x) making it a hexaploid species used widely for bread making globally."
  },
  {
    id: "d111_045",
    subject: "da-111",
    question: "The new inter-generic hybrid Triticale was developed from a cross between:",
    options: ["Triticum aestivum and Hordeum vulgare barley", "Oryza sativa and Oryza perennis rice species", "Avena sativa and Avena byzantina oat species", "Triticum sp. and Secale cereale (rye) species"],
    correct: 3,
    explanation: "Inter generic hybridization may be used to develop a new crop species. E.g., Triticale from a cross between Triticum sp. and Secale cereale (rye)."
  },
  {
    id: "d111_046",
    subject: "da-111",
    question: "In hybridization, emasculation should ideally be done:",
    options: ["Just after harvesting pollen from male parent", "At noon when temperature is at maximum", "In morning hours when flowers fully open", "During afternoon between 4 PM and 6 PM"],
    correct: 3,
    explanation: "Emasculation is generally done in the evening, between 4 PM and 6 PM one day before the anthers are expected to dehisce or mature and the stigma is likely to become fully receptive."
  },
  {
    id: "d111_047",
    subject: "da-111",
    question: "Mass selection is most commonly practiced in which type of crop?",
    options: ["Cross pollinated crops like cotton and bajra", "Vegetatively propagated crops like potato", "Apomictic crops like citrus and mango", "Self-pollinated crops like paddy and wheat"],
    correct: 0,
    explanation: "Mass selection is common in cross pollinated species and rare in self pollinated and asexually propagated species. Development of a variety may take 8 years in this method."
  },
  {
    id: "d111_048",
    subject: "da-111",
    question: "In mass selection, seeds from selected plants are:",
    options: ["Grown in progeny rows and individually evaluated", "Kept separately and backcrossed with parents", "Mixed together to constitute a new bulk variety", "Used for making hybrid combinations each season"],
    correct: 2,
    explanation: "In mass selection, a large number of plants having similar phenotype are selected and their seeds are mixed together to constitute a new variety. The plants are genotypically different."
  },
  {
    id: "d111_049",
    subject: "da-111",
    question: "In pure line selection, variety development takes approximately:",
    options: ["Eight years which is the same as mass selection", "Ten years for evaluation and variety release", "Five years for release as an improved variety", "Three years as it is a rapid selection method"],
    correct: 1,
    explanation: "In pureline selection, from the base population select best looking plants of 50-100, grow in progeny rows, reject unwanted progenies, repeat the process. Variety development may take ten years."
  },
  {
    id: "d111_050",
    subject: "da-111",
    question: "A clone consists of plants produced from a single parent through:",
    options: ["Mutation breeding using physical or chemical agents", "Asexual reproduction without any gamete fusion", "Hybridization between two selected parent plants", "Sexual reproduction using male and female gametes"],
    correct: 1,
    explanation: "A clone is a group of plants produced from a single parent through asexual reproduction. Asexually propagated crops consist of large number of clones, and they are often known as clonal crops."
  },
  {
    id: "d111_051",
    subject: "da-111",
    question: "Clonal selection variety development typically takes:",
    options: ["Nine years from selection to variety release", "Ten years as in pure line selection method", "Five years for identification and release", "Eight years as in mass selection method"],
    correct: 0,
    explanation: "Variety development through clonal selection may take place in nine years. Superior clones are identified, put in multilocation yield trials, and released as a new variety."
  },
  {
    id: "d111_052",
    subject: "da-111",
    question: "Introduction as a plant breeding method involves taking a genotype to:",
    options: ["A research station for genetic improvement work", "A hybridization program for crossing purposes", "A new place where it was not previously grown", "A selection program for purifying existing variety"],
    correct: 2,
    explanation: "Taking a genotype or a group of genotypes into a new place or environment where they were not grown previously is termed as Introduction."
  },
  {
    id: "d111_053",
    subject: "da-111",
    question: "Spontaneous mutations occur in natural populations at a rate of approximately:",
    options: ["10-12 or one in trillion organisms affected", "10-9 or one in billion organisms affected", "10-3 or one in thousand organisms affected", "10-6 or one in million organisms affected"],
    correct: 3,
    explanation: "Spontaneous mutations occur in natural populations at a low rate (10-6). Natural agents like electrical waves, atomic rays, temperature etc are responsible for spontaneous mutations."
  },
  {
    id: "d111_054",
    subject: "da-111",
    question: "The chemical mutagen Colchicine causes polyploidy by inhibiting:",
    options: ["Spindle fibre formation during anaphase of meiosis", "Protein synthesis in the ribosomal machinery", "Chromosome replication in dividing plant cells", "DNA replication during the S phase of cell cycle"],
    correct: 0,
    explanation: "In anaphase of meiosis division, colchicine inhibits formation of spindle fibres, but does not inhibit chromosome replication. This property is used to produce polyploids."
  },
  {
    id: "d111_055",
    subject: "da-111",
    question: "The Gottlieb Haberlandt who attempted plant tissue culture in vitro is called:",
    options: ["Father of Genetics for his landmark research", "Father of Plant Breeding for his contributions", "Father of Plant Tissue Culture for his 1902 work", "Father of Mutation Breeding for mutation work"],
    correct: 2,
    explanation: "In 1902, Gottlieb Haberlandt, a German plant physiologist, attempted to cultivate plant tissue culture cell in vitro. He is regarded as the father of plant tissue culture."
  },
  {
    id: "d111_056",
    subject: "da-111",
    question: "Totipotency in tissue culture refers to the ability of a cell to:",
    options: ["Give rise to a whole plant regardless of ploidy", "Produce secondary metabolites in liquid medium", "Resist viral and bacterial pathogens in culture", "Divide rapidly on any type of culture medium"],
    correct: 0,
    explanation: "Totipotency is the inherent property of a cell or tissue to give rise to whole plant irrespective of their ploidy level and the form of specialization."
  },
  {
    id: "d111_057",
    subject: "da-111",
    question: "Virus-free plants can be produced through tissue culture technique of:",
    options: ["Meristem culture as meristems are virus-free", "Anther culture for production of haploid plants", "Protoplast fusion for somatic hybridization", "Endosperm culture to produce triploid plants"],
    correct: 0,
    explanation: "Virus free plants can be produced through meristem culture. Meristematic cells are typically free from systemic virus infections, making this technique valuable for clean plant propagation."
  },
  {
    id: "d111_058",
    subject: "da-111",
    question: "Cryopreservation involves preservation of cells and tissues at a temperature of:",
    options: ["-20°C using standard deep freezer storage", "4°C using refrigeration for medium term", "0°C using ice cold water for short term", "-196°C using liquid nitrogen for long term"],
    correct: 3,
    explanation: "The preservation of cells, tissues, organs in liquid Nitrogen at -196°C is called cryopreservation. Large amounts of germplasm can be stored within a small space under in vitro condition."
  },
  {
    id: "d111_059",
    subject: "da-111",
    question: "Somatic hybrids and cybrids can be produced through the technique of:",
    options: ["Meristem culture in aseptic tissue conditions", "Embryo rescue technique to overcome barriers", "Anther culture using haploid pollen grains", "Protoplast fusion or somatic hybridization method"],
    correct: 3,
    explanation: "Somatic hybrids and cybrids can be produced through protoplast fusion (or) somatic hybridization. This allows combining genomes from plants that cannot normally be crossed."
  },
  {
    id: "d111_060",
    subject: "da-111",
    question: "In Row Yield Trial (RYT), for every ten rows of improved variety, one row of:",
    options: ["Female parent variety is included as standard", "Check variety is included but it is not replicated", "Improved variety is included as a second check", "Male parent variety is included for comparison"],
    correct: 1,
    explanation: "In Row Yield Trial (RYT), for every ten rows of improved variety one row of check variety is included and it is not a replicated trial."
  },
  {
    id: "d111_061",
    subject: "da-111",
    question: "In Comparative Yield Trial (CYT), entries are evaluated over:",
    options: ["Three seasons with one or more check varieties", "Five seasons at multi-location research stations", "Two seasons at two or more locations", "One season at a single research location"],
    correct: 0,
    explanation: "In CYT, entries are evaluated in replication with one or more checks in three seasons. The entries found superior over the checks are tested in Multilocation Trials."
  },
  {
    id: "d111_062",
    subject: "da-111",
    question: "In India, the Chairman of the Central Variety Release Committee is:",
    options: ["Director of Agriculture of the concerned State", "Deputy Director General (Crop Science), ICAR", "Production Commissioner, Government of India", "Director High Yielding Varieties Programme"],
    correct: 1,
    explanation: "In Central Variety Release Committee, Deputy Director General (Crop Science) of ICAR is the Chairman. The release proposal of varieties recommended for All India release is put up before CVRC."
  },
  {
    id: "d111_063",
    subject: "da-111",
    question: "In the State Variety Releasing Committee, the Chairman is:",
    options: ["Director of Research of State Agriculture University", "Director of State Seed Certification Agency", "Deputy Director General (Crop Science), ICAR", "Director of Agriculture for field crops only"],
    correct: 3,
    explanation: "In case of state variety release committee, Director of Agriculture for field crops and Director of Horticulture for vegetable and horticulture crops is the chairman."
  },
  {
    id: "d111_064",
    subject: "da-111",
    question: "A seed is defined as a matured ovule consisting of an embryonic plant with:",
    options: ["Multiple embryos from polyembryony phenomenon", "Fleshy pericarp tissue for seed dispersal", "Endosperm tissue only without any seed coat", "A store of food surrounded by a protective coat"],
    correct: 3,
    explanation: "Seed is a matured ovule that consists of an embryonic plant together with a store of food, all surrounded by a protective coat."
  },
  {
    id: "d111_065",
    subject: "da-111",
    question: "Breeder seed should have a minimum genetic purity of:",
    options: ["98.0% as the physical purity standard for seeds", "99.0% genetic purity as certified seed standard", "99.5% genetic purity as foundation seed standard", "100% genetic purity as nucleus seed standard"],
    correct: 3,
    explanation: "Breeder seed provides cent per cent physical and genetic pure seed for production of foundation class. Breeder seed/Nucleus seed = 100% genetic purity."
  },
  {
    id: "d111_066",
    subject: "da-111",
    question: "The colour of the seed certification tag issued for Foundation seed is:",
    options: ["Blue (azure blue shade ISI No. 104) colour", "White colour tag issued by Seed Certification Agency", "Golden yellow tag issued by producing agency", "Opel green colour for truthfully labeled seed"],
    correct: 1,
    explanation: "Seed Certification agency issues a white colour certification for foundation class seed. Foundation seed should have minimum genetic purity of 99.5%."
  },
  {
    id: "d111_067",
    subject: "da-111",
    question: "The colour of seed tag issued for Breeder seed is:",
    options: ["Golden yellow colour tag by producing agency", "Opel green colour for truthful labeling purposes", "White colour issued by seed certification agency", "Blue colour as ISI standard azure blue shade"],
    correct: 0,
    explanation: "Golden yellow coloured certificate is issued for breeder seed category by the producing agency. Breeder seed is produced under supervision of plant breeder and monitored by a committee."
  },
  {
    id: "d111_068",
    subject: "da-111",
    question: "Certified seed should have a minimum genetic purity of:",
    options: ["100% genetic purity like nucleus seed standard", "97.0% as for sesame and soybean crop seeds", "99.0% genetic purity as per certification standards", "99.5% genetic purity like foundation seed class"],
    correct: 2,
    explanation: "Certified seed should have the minimum genetical purity of 99%. Seed Certification Agency issues a blue colour (azure blue, ISI No. 104) certificate for certified seed."
  },
  {
    id: "d111_069",
    subject: "da-111",
    question: "Varietal deterioration due to natural crossing is a major concern in:",
    options: ["Cross fertilized crops like maize and bajra", "Apomictic crops like mango and citrus trees", "Vegetatively propagated crops like potato", "Self-pollinated crops like paddy and groundnut"],
    correct: 0,
    explanation: "Natural crossing can be an important source of varietal deterioration in sexually propagated crops. It can be a major source of contamination in cross fertilized crops."
  },
  {
    id: "d111_070",
    subject: "da-111",
    question: "Mechanical mixtures, the most important cause of varietal deterioration, occur at:",
    options: ["Time of sowing using the same drill for varieties", "Time of irrigation during the crop season only", "Time of applying pesticides and fungicides", "Time of applying fertilizers during crop growth"],
    correct: 0,
    explanation: "Mechanical mixtures often take place at the time of sowing if more than one variety is sown with the same seed drill, through volunteer plants, or through adjacent field varieties."
  },
  {
    id: "d111_071",
    subject: "da-111",
    question: "Self-pollinated crops require a minimum isolation distance of approximately:",
    options: ["200 meters for certified seed production fields", "3 meters generally for foundation and certified seed", "400 meters for foundation seed production fields", "100 meters for both seed production classes"],
    correct: 1,
    explanation: "Self pollinated crop requires low isolation distance (3 meters generally). Cross pollinated crops require high isolation distance. Often cross pollinated crops require moderate isolation distance."
  },
  {
    id: "d111_072",
    subject: "da-111",
    question: "Time isolation in maize seed production requires sowing the seed crop:",
    options: ["21 days ahead of the contaminating maize crops", "7 days ahead of contaminating crop fields", "35 days ahead of the contaminating crop fields", "14 days ahead of the contaminating crop fields"],
    correct: 0,
    explanation: "In Maize, seed crop should be planted ahead of 21 days than other maize crops for time isolation. Flowering of early planting and present planting crops should not coincide."
  },
  {
    id: "d111_073",
    subject: "da-111",
    question: "Rouging in seed production refers to the removal of:",
    options: ["Pollen shedders from both male and female rows", "Weed plants from around the seed crop boundary", "Off-type plants phenotypically different from variety", "Diseased plants only from the seed crop field"],
    correct: 2,
    explanation: "Removal of off type (phenotypically different) plant from the field of an improved variety is known as rouging. Rouging is compulsory to maintain the genetic purity of cross pollinated crops."
  },
  {
    id: "d111_074",
    subject: "da-111",
    question: "In Rice, the botanical name is Oryza sativa and chromosome number 2n is:",
    options: ["24 chromosomes in the rice plant genome", "22 chromosomes found in many diploid crops", "20 chromosomes as in maize crop plants", "26 chromosomes in the diploid genome"],
    correct: 0,
    explanation: "Rice botanical name is Oryza sativa, chromosome number [2n] = 24, Family: Poaceae, Inflorescence: Panicle, Pollination: Self-Pollination."
  },
  {
    id: "d111_075",
    subject: "da-111",
    question: "In rice, the pollen viability duration under field conditions is only about:",
    options: ["10 minutes under field temperature conditions", "60 minutes under normal field temperature", "45 minutes at peak flowering time daily", "30 minutes under humid field conditions"],
    correct: 0,
    explanation: "Pollen viability in rice is 10 minutes. This very short pollen viability makes timing of pollination critical in rice hybridization and hybrid seed production."
  },
  {
    id: "d111_076",
    subject: "da-111",
    question: "In paddy, the favourable relative humidity for flowering is:",
    options: ["60 to 70 percent for anther dehiscence", "50 to 60 percent for stigma receptivity", "70 to 80 percent for optimal seed setting", "40 to 50 percent for optimal pollen viability"],
    correct: 2,
    explanation: "Favourable RH for flowering in rice is 70-80%. Temperature favorable for flowering is 24-28°C. Stigma receptivity lasts 3 days while pollen viability is only 10 minutes."
  },
  {
    id: "d111_077",
    subject: "da-111",
    question: "In hybrid rice seed production using CGMS, the A-line is maintained by crossing with:",
    options: ["B-line or maintainer line for A-line maintenance", "Any commercial variety for hybrid seed production", "F1 hybrid to maintain the male sterile trait", "R-line restorer to produce male fertile hybrids"],
    correct: 0,
    explanation: "In hybrid rice, A-line (male sterile line) is maintained by crossing with B-line (maintainer line). For producing hybrid seed, A-line is crossed with R-line (restorer line)."
  },
  {
    id: "d111_078",
    subject: "da-111",
    question: "In rice hybrid seed production, the row ratio of female to male parents adopted is:",
    options: ["8:2 (A-line:R-line) currently adopted in practice", "6:2 (female:male) for maximum seed production", "4:2 (female:male) ratio for higher seed yield", "2:1 (female:male) standard ratio for all hybrids"],
    correct: 0,
    explanation: "Practically a row ratio of 8:2 (A x R) is currently adopted for hybrid seed production in rice. First plant male lines (B/R) and later female lines (A)."
  },
  {
    id: "d111_079",
    subject: "da-111",
    question: "The egg floatation technique in paddy uses salt water of specific gravity:",
    options: ["1.03 using 120g of salt per 1000 ml water", "1.00 which is plain water without any salt", "1.10 using 200g of salt per 1000 ml water", "1.05 using 150g of salt per 1000 ml water"],
    correct: 0,
    explanation: "Egg floatation technique uses specific gravity of 1.03 (120g of salt in 1000ml of water). The sinkers are good seeds while the floaters are less vigorous and dead seeds."
  },
  {
    id: "d111_080",
    subject: "da-111",
    question: "GA3 application in hybrid rice seed production primarily helps to:",
    options: ["Suppress weed growth in the seed production field", "Increase tillering for more productive panicles", "Fully exert panicles from flag leaves for pollination", "Reduce plant height for better lodging resistance"],
    correct: 2,
    explanation: "Application of GA3 increases the internode length and the panicles will be fully exerted from the flag leaves. It also increases the duration of floret opening and stigma receptivity."
  },
  {
    id: "d111_081",
    subject: "da-111",
    question: "In Maize, the botanical name is Zea mays and chromosome number 2n is:",
    options: ["24 chromosomes as in related grass species", "28 chromosomes as in many hybrid corn types", "14 chromosomes as in barley crop species", "20 chromosomes as a diploid monoecious crop"],
    correct: 3,
    explanation: "Maize botanical name is Zea mays, Chromosome number: 2n=20, Botanical Family: Poaceae. It is a monoecious cross-pollinated crop with protandry as special character."
  },
  {
    id: "d111_082",
    subject: "da-111",
    question: "In maize, the special character that promotes cross pollination is called:",
    options: ["Cleistogamy where flowers never open at all", "Homogamy where both mature simultaneously", "Protogyny where pistil matures before anthers", "Protandry where anthers mature before pistil"],
    correct: 3,
    explanation: "Protandry is a special character of maize. Pollen shedding begins 1 to 3 days before the silk emerges from the cob. This promotes cross pollination in maize."
  },
  {
    id: "d111_083",
    subject: "da-111",
    question: "In maize, detasseling refers to the removal of:",
    options: ["Leaves from the plant for better light penetration", "Male inflorescence (tassel) from the female parent", "Roots from the plant for replanting seedlings", "Female inflorescence (cob) from the female plant"],
    correct: 1,
    explanation: "Detasseling is the removal of tassel (male inflorescence) from the female parent in hybrid maize seed production. In maize, the male inflorescence is called tassel and its removal is detasseling."
  },
  {
    id: "d111_084",
    subject: "da-111",
    question: "In maize double cross hybrid production, the number of inbred lines used is:",
    options: ["Two inbred lines for a single cross hybrid", "Four inbred lines for double cross production", "Three inbred lines for three-way cross hybrid", "Six inbred lines for complex multiple crossing"],
    correct: 1,
    explanation: "Double cross in maize is a cross between two single crosses: (A x B) x (C x D). For production of double cross, four inbreds (A, B, C & D) are used."
  },
  {
    id: "d111_085",
    subject: "da-111",
    question: "In Sorghum (Jowar), the flowering starts from the tip of panicle and proceeds:",
    options: ["Upward (acropetal) from base to the apex tip", "Simultaneously across all branches of the panicle", "Downward (basipetal) from tip toward the base", "From middle outward toward the panicle periphery"],
    correct: 2,
    explanation: "In Sorghum, flowering starts from the tip of the panicle and proceeds downwards (basipetal). Flowering completes in 7 days and pollen is viable for 10 to 20 minutes under field conditions."
  },
  {
    id: "d111_086",
    subject: "da-111",
    question: "In Bajra, the extent of cross pollination is about 80% due to:",
    options: ["Protogynous condition with wind as pollinating agent", "Male sterility preventing self pollination always", "Insect activity promoting heavy cross pollination", "Protandry where anthers shed pollen before silk"],
    correct: 0,
    explanation: "Bajra is predominantly a cross pollinated crop with 80% cross pollination due to protogynous condition. The pollinating agent is wind."
  },
  {
    id: "d111_087",
    subject: "da-111",
    question: "In Red gram, the extent of natural crossing recorded is up to:",
    options: ["80 percent cross pollination by wind only", "10 to 20 percent cross pollination by insects", "5 to 10 percent cross pollination by bees", "65 percent cross pollination by bees and insects"],
    correct: 3,
    explanation: "Red gram is partially self and cross pollinated. Although anthers burst before flowers open, there is considerable cross-fertilization by bees and other insects. Natural crossing up to sixty five percent has been recorded."
  },
  {
    id: "d111_088",
    subject: "da-111",
    question: "Sunflower hybrid seed fields must be isolated from other sunflower by at least:",
    options: ["300 meters for foundation and 200m certified", "200 meters for foundation and 100m certified", "50 meters for foundation and 30m certified seed", "600–1000 meters for A-line maintenance seed"],
    correct: 3,
    explanation: "The seed fields must be isolated from other sunflower fields, and from wild sunflower species by 600-1000 meters for maintenance of A-line and 400 meters for hybrid seed production (AxR)."
  },
  {
    id: "d111_089",
    subject: "da-111",
    question: "Staggered sowing in hybrid seed production ensures:",
    options: ["Reduction in isolation distance requirements", "Higher fertilizer utilization by both parental lines", "Synchronization of flowering between male and female", "Better weed control in the seed production field"],
    correct: 2,
    explanation: "Staggered sowing adjusts sowing of male and female parents so that both come to flowering at the same time. Late flowering parent should be sown first for synchronization."
  },
  {
    id: "d111_090",
    subject: "da-111",
    question: "In rice seed production, a minimum of how many field inspections should be conducted?",
    options: ["Two field inspections before and at harvest", "Three inspections at pre-flowering and harvest", "Five inspections from seedling to harvest stage", "Four inspections from planting through harvest"],
    correct: 3,
    explanation: "A minimum of four field inspections should be conducted in rice seed production: first before flowering, second and third during flowering, and fourth before harvesting."
  },
  {
    id: "d111_091",
    subject: "da-111",
    question: "For rice foundation seed, the maximum permissible off types in seed field is:",
    options: ["0.20% off types allowed in certified seed fields", "0.01% off types as the strictest possible standard", "0.10% off types allowed in foundation seed fields", "0.05% off types which is the foundation seed limit"],
    correct: 3,
    explanation: "For rice foundation seed varieties, off types maximum limit is 0.05% and for certified seed it is 0.20%. For wild rice, the limit is 0.01% for foundation and 0.02% for certified."
  },
  {
    id: "d111_092",
    subject: "da-111",
    question: "Paddy seeds should be dried for storage to a moisture content of:",
    options: ["17 to 20 percent at physiological maturity", "13 percent for better storage of paddy seed", "15 to 17 percent for short term bag storage", "10 to 12 percent for fumigation treatment"],
    correct: 1,
    explanation: "The seeds are dried in a threshing floor with adequate stirring known as tempering. The seeds are dried to 13% moisture for better storage of paddy seed."
  },
  {
    id: "d111_093",
    subject: "da-111",
    question: "In maize, the physical purity standard for foundation and certified seed is:",
    options: ["97.0% for sesame soybean and jute seed crops", "99.5% as for foundation class seed production", "99.0% as for ladies finger and maize seed", "98.0% pure seed as minimum purity standard"],
    correct: 3,
    explanation: "In maize seed standards, Pure seed maximum for both foundation seed and certified seed is 98.0% for all classes including inbreds and hybrids."
  },
  {
    id: "d111_094",
    subject: "da-111",
    question: "Long term seed storage moisture content should be maintained at:",
    options: ["Long term Storage: 6–8% moisture content", "Long term storage: 15 to 17% moisture content", "Short term storage: 6 to 8% moisture level", "Long term storage: 10 to 13% moisture content"],
    correct: 0,
    explanation: "For seed storage: Long term Storage moisture should be 6-8% and Short term Storage moisture should be 10-13%. Lower moisture ensures longer seed viability."
  },
  {
    id: "d111_095",
    subject: "da-111",
    question: "In maize, germination minimum standard for both foundation and certified seed is:",
    options: ["75% germination as the minimum standard", "85% germination as the minimum standard", "80% germination as the minimum standard", "90% germination as the minimum standard"],
    correct: 2,
    explanation: "In maize seed standards, Germination (Minimum) is 80.0% for foundation seed (inbreds and hybrids) and certified seed. Moisture maximum is 12.0% for all classes."
  },
  {
    id: "d111_096",
    subject: "da-111",
    question: "Nitrogen deficiency in paddy appears first on the older leaves as:",
    options: ["Light green to pale yellow coloration due to proteolysis", "Reddish brown pigmentation in 3-4 week seedlings", "Interveinal chlorosis leaving veins green initially", "Brown scorching along margins spreading inward"],
    correct: 0,
    explanation: "Nitrogen deficiency: Due to high mobility of N in plants, its deficiency symptoms first appear on the older leaves in the form of light green to pale yellow coloration due to proteolysis."
  },
  {
    id: "d111_097",
    subject: "da-111",
    question: "Khaira disease in paddy is caused by deficiency of which micronutrient?",
    options: ["Iron deficiency showing interveinal chlorosis", "Boron deficiency causing distorted leaf growth", "Zinc deficiency showing reddish brown symptoms", "Magnesium deficiency causing yellowing patterns"],
    correct: 2,
    explanation: "Khaira disease is caused by zinc deficiency. The first symptom appears in 3-4 week old seedlings when young leaves develop reddish brown pigmentation, appearing first in the middle of leaves."
  },
  {
    id: "d111_098",
    subject: "da-111",
    question: "Objectionable weed in paddy (rice) seed crop is:",
    options: ["Convolvulus arvensis found in wheat fields", "Wild paddy (Oryza sativa var. Fatua) rice weed", "Argemone mexicana found in mustard crop", "Chicory (Chicorum intybus) found in berseem"],
    correct: 1,
    explanation: "The objectionable weed in paddy seed crop is Wild paddy (Oryza sativa var. Fatua). In wheat, it is Convolvulus arvensis (Hiran kuri). In berseem, it is Chicory."
  },
  {
    id: "d111_099",
    subject: "da-111",
    question: "The designated disease for certification in Pearl Millet includes Ergot caused by:",
    options: ["Ustilago tritici the loose smut pathogen", "Sphacelotheca sorghii causing grain smut", "Alternaria sp. causing blight in crops", "Claviceps microcephala the ergot pathogen"],
    correct: 3,
    explanation: "In Pearl Millet, designated diseases include Grain smut (Tolyposporium penicillariae), Green ear (Sclerospora graminicola), and Ergot caused by Claviceps microcephala."
  },
  {
    id: "d111_100",
    subject: "da-111",
    question: "Differences between seed and grain: seed unlike grain must be:",
    options: ["Used for human consumption as food material", "Compulsorily certified or truthfully labelled always", "Free from pesticide treatment to ensure safety", "Produced in large quantities on commercial basis"],
    correct: 1,
    explanation: "Seed should be compulsorily certified/truthful labelled. Grain has no such condition. Seed should be viable, have maximum genetic and physical purity, and should satisfy minimum seed certification standards."
  },

  // ── BATCH 2: Additional 100 questions from PJTSAU DA-111 Theory Notes (Plant Breeding, Seed Production & Certification) ──
  {
    id: "d111x_003",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Mendel's laws of inheritance were rediscovered in which year?",
    options: ["1900", "1914", "1927", "1865"],
    correct: 0,
    explanation: "As per DA-111 notes: In 1900, Mendel's laws of inheritance were rediscovered and laid the foundation for the development of plant breeding."
  },
  {
    id: "d111x_004",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is known as the 'Father of Botany'?",
    options: ["Theophrastus", "Charles Darwin", "Hugo de Vries", "Gregor John Mendel"],
    correct: 0,
    explanation: "As per DA-111 notes: Theophrastus (300 BC) is known as the Father of Botany."
  },
  {
    id: "d111x_005",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who coined the term 'heterosis'?",
    options: ["G.H. Shull (1914)", "H.J. Muller", "Hugo de Vries", "W.L. Johannsen"],
    correct: 0,
    explanation: "As per DA-111 notes: G.H. Shull (1914) coined the term heterosis. In maize, loss of vigor occurs due to self-pollination and hybrid vigor is more due to cross-pollination."
  },
  {
    id: "d111x_006",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who invented mutations in plants?",
    options: ["Charles Darwin", "G.H. Shull", "Hugo de Vries (1900)", "Watson and Crick"],
    correct: 2,
    explanation: "As per DA-111 notes: Hugo de Vries (1900) used the term mutation first time and invented/discovered mutations in plants."
  },
  {
    id: "d111x_007",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Watson and Crick proposed which structure in 1953?",
    options: ["Chromosome theory", "Genetic code", "Double helix structure of DNA", "Pureline theory"],
    correct: 2,
    explanation: "As per DA-111 notes: Watson and Crick (1953) proposed the double helix structure of the DNA molecule."
  },
  {
    id: "d111x_008",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who proposed the pureline theory in 1903?",
    options: ["H.J. Muller", "W.L. Johannsen", "Hugo de Vries", "G.H. Shull"],
    correct: 1,
    explanation: "As per DA-111 notes: W.L. Johannsen (1903) proposed the pureline theory that provided the genetic basis for individual plant selection."
  },
  {
    id: "d111x_009",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Sir T.S. Venkatraman transferred thick stem and high sugar content from tropical noble cane to North Indian canes. This process is called:",
    options: ["Backcross breeding", "Hybridization", "Noblization of sugarcane", "Mutation breeding"],
    correct: 2,
    explanation: "As per DA-111 notes: Sir T.S. Venkatraman transferred thick stem and high sugar contents from tropical noble cane to North Indian canes. This process is known as noblization of sugarcane."
  },
  {
    id: "d111x_010",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who coined the term 'Biotechnology'?",
    options: ["Har Gobind Khorana", "Watson and Crick", "Karl Ereky", "Hugo de Vries"],
    correct: 2,
    explanation: "As per DA-111 notes: Karl Ereky coined the term Biotechnology."
  },
  {
    id: "d111x_011",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The first hybrid maize in India (Ganga-1) was released in:",
    options: ["1952", "1961", "1957", "1965"],
    correct: 1,
    explanation: "As per DA-111 notes: In collaboration with Rockefeller foundation, the first maize hybrid Ganga-1 was released in 1961 in India."
  },
  {
    id: "d111x_012",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Sugarcane Breeding Institute was established at Coimbatore in:",
    options: ["1920", "1906", "1900", "1912"],
    correct: 3,
    explanation: "As per DA-111 notes: Sugarcane Breeding Institute was established in 1912 at Coimbatore. The CO prefix is used before sugarcane varieties released from there."
  },
  {
    id: "d111x_013",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Central Potato Research Institute was originally established at Simla in:",
    options: ["1928", "1922", "1946", "1935"],
    correct: 3,
    explanation: "As per DA-111 notes: Central Breeding Station was established in 1935 at Simla, later changed to Central Potato Research Institute. Kufri name is used before varieties from this centre."
  },
  {
    id: "d111x_014",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The first hybrid cotton (H4) for commercial cultivation was released from:",
    options: ["Surat", "Dharwar", "Nagpur", "Hyderabad"],
    correct: 0,
    explanation: "As per DA-111 notes: Hybrid Cotton H4 from Surat was the world's first hybrid released for commercial cultivation. Later, Varalaxmi hybrid was released from Dharwar."
  },
  {
    id: "d111x_015",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which objective of plant breeding involves developing varieties tolerant to drought and salinity?",
    options: ["Determinate growth", "Abiotic resistance", "Quality improvement", "Biotic resistance"],
    correct: 1,
    explanation: "As per DA-111 notes: Abiotic resistance breeding aims to develop resistant varieties for drought, soil salinity, extreme temperatures, heat, wind, cold and frost."
  },
  {
    id: "d111x_016",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In cotton, crop maturity has been reduced from 270 days to approximately:",
    options: ["170 days", "200 days", "120 days", "180 days"],
    correct: 0,
    explanation: "As per DA-111 notes: Through plant breeding, maturity has been reduced from 270 days to 170 days in cotton."
  },
  {
    id: "d111x_017",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In pigeonpea (redgram), crop maturity has been reduced from 270 days to:",
    options: ["120 days", "90 days", "150 days", "180 days"],
    correct: 0,
    explanation: "As per DA-111 notes: Through plant breeding, maturity in pigeonpea has been reduced from 270 days to 120 days."
  },
  {
    id: "d111x_018",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The toxic substance in Khesari (Lathyrus sativus) that causes paralysis of lower limbs is:",
    options: ["Gossypol", "Aflatoxin", "Neurotoxin (ODAP)", "Erucic acid"],
    correct: 2,
    explanation: "As per DA-111 notes: Neurotoxin (ODAP - Oxalyl Diaminopropionic Acid) in Khesari (Lathyrus sativus) leads to paralysis of lower limbs. Its elimination is an objective of plant breeding."
  },
  {
    id: "d111x_019",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Gossypol, a toxic substance found in cotton seeds, is harmful for:",
    options: ["Root fungi", "Soil bacteria", "Bees", "Human consumption"],
    correct: 3,
    explanation: "As per DA-111 notes: Gossypol from cotton seed is harmful for human consumption. Removal of gossypol from cotton seed would increase its nutritional value."
  },
  {
    id: "d111x_020",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A complete flower has all four whorls. What are these four whorls?",
    options: ["Perianth, Stamen, Pistil, Bract", "Sepals, Petals, Stamens, Carpels", "Calyx, Androecium, Gynoecium, Receptacle", "Root, Stem, Leaves, Flower"],
    correct: 1,
    explanation: "As per DA-111 notes: A complete flower has four whorls: Calyx (sepals), Corolla (petals), Androecium (stamens), and Gynoecium (carpels)."
  },
  {
    id: "d111x_021",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The collective term for sepals is called:",
    options: ["Androecium", "Perianth", "Corolla", "Calyx"],
    correct: 3,
    explanation: "As per DA-111 notes: The sepals, collectively called the calyx, help to protect the unopened bud."
  },
  {
    id: "d111x_022",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Plants having male and female flowers borne on separate plants are called:",
    options: ["Bisexual", "Hermaphrodite", "Dioecious", "Monoecious"],
    correct: 2,
    explanation: "As per DA-111 notes: Species with male and female flowers borne on separate plants are termed dioecious (two homes). Examples: Papaya, Cannabis, date palm."
  },
  {
    id: "d111x_023",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Corn (maize) is an example of which type of plant?",
    options: ["Dioecious", "Hermaphrodite", "Monoecious", "Bisexual"],
    correct: 2,
    explanation: "As per DA-111 notes: If both male and female flowers are borne on the same plant, the species is called monoecious. Examples include corn, pea, colocasia, castor, coconut."
  },
  {
    id: "d111x_024",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The female reproductive organ of a flower is called:",
    options: ["Androecium", "Corolla", "Gynoecium", "Perianth"],
    correct: 2,
    explanation: "As per DA-111 notes: The innermost group of structures in the flower is the gynoecium, or the female reproductive component(s)."
  },
  {
    id: "d111x_025",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The study of pollen grains is called:",
    options: ["Morphology", "Palynology", "Ontogeny", "Cytology"],
    correct: 1,
    explanation: "As per DA-111 notes: Study of pollen grains is called Palynology."
  },
  {
    id: "d111x_026",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Each Pollen Mother Cell (PMC) produces how many microspores?",
    options: ["Two", "Three", "Four", "Eight"],
    correct: 2,
    explanation: "As per DA-111 notes: Pollen Mother Cells are in diploid (2n) condition and each PMC produces four microspores through meiosis."
  },
  {
    id: "d111x_027",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Each Megaspore Mother Cell (MMC) produces four megaspores, of which how many survive?",
    options: ["One", "Three", "Two", "Four"],
    correct: 0,
    explanation: "As per DA-111 notes: Each MMC produces four megaspores, out of which three degenerate, resulting in a single functional megaspore."
  },
  {
    id: "d111x_028",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The female gametophyte (embryo sac) is an eight-nucleate, how many-celled structure?",
    options: ["Eight cells", "Five cells", "Seven cells", "Six cells"],
    correct: 2,
    explanation: "As per DA-111 notes: The haploid megaspore undergoes mitosis to produce an eight-nucleate, seven-cell female gametophyte (embryo sac)."
  },
  {
    id: "d111x_030",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The attachment of funicle with the body of the ovule is called:",
    options: ["Chalaza", "Hilum", "Raphe", "Micropyle"],
    correct: 1,
    explanation: "As per DA-111 notes: The point of attachment of funicle with the body of the ovule is called hilum."
  },
  {
    id: "d111x_031",
    subject: "da-111",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The fusion of one sperm with the egg cell to produce a diploid zygote is called:",
    options: ["Triple fusion", "Syngamy (Generative fertilization)", "Parthenogenesis", "Double fertilization"],
    correct: 1,
    explanation: "As per DA-111 notes: The fusion of one of the two sperms with the egg cell producing a diploid zygote is known as fertilization (syngamy or generative fertilization)."
  },
  {
    id: "d111x_032",
    subject: "da-111",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "In double fertilization in angiosperms, the endosperm is formed by the fusion of:",
    options: ["Egg + one sperm nucleus", "Second sperm + diploid polar nuclei (central cell)", "Egg + polar nuclei", "Two sperm nuclei together"],
    correct: 1,
    explanation: "As per DA-111 notes: In double fertilization, the second sperm fuses with the diploid central cell (two polar nuclei fused) to form the triploid endosperm."
  },
  {
    id: "d111x_033",
    subject: "da-111",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Self-pollination (autogamy) is most common in which type of crops?",
    options: ["Maize and sorghum", "Papaya and date palm", "Rice, wheat, and peas", "Castor and coconut"],
    correct: 2,
    explanation: "As per DA-111 notes: Self-pollination (autogamy) is most common in rice, wheat, peas and other cereal and pulse crops."
  },
  {
    id: "d111x_034",
    subject: "da-111",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Pure Line Selection is effective in which type of crop?",
    options: ["Self-pollinated crops", "Dioecious crops", "Cross-pollinated crops", "Vegetatively propagated crops"],
    correct: 0,
    explanation: "As per DA-111 notes: Pure Line Selection is most effective in self-pollinated crops where a pure line represents a genetically uniform population."
  },
  {
    id: "d111x_035",
    subject: "da-111",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Mass selection involves selection of plants based on:",
    options: ["Only phenotype", "DNA markers only", "Only genotype", "Both genotype and genotype"],
    correct: 0,
    explanation: "As per DA-111 notes: Mass selection involves selecting plants based on phenotype (observable characteristics) and is the simplest and oldest method of plant improvement."
  },
  {
    id: "d111x_036",
    subject: "da-111",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The variety that results from crossing two genetically different parents and their F1 hybrid is used directly is called:",
    options: ["Single cross hybrid", "Pure line variety", "Multiline variety", "Composite variety"],
    correct: 0,
    explanation: "As per DA-111 notes: A single cross hybrid is obtained by crossing two inbred lines (parents); the resulting F1 generation is used directly as the commercial hybrid variety."
  },
  {
    id: "d111x_037",
    subject: "da-111",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Heterosis (hybrid vigor) is defined as:",
    options: ["Superiority of F1 hybrid over both parents", "Equal performance of F1 and parents", "Deterioration of F1 generation", "Superiority of parents over F1"],
    correct: 0,
    explanation: "As per DA-111 notes: Heterosis (coined by G.H. Shull) is the superiority of the F1 hybrid over both parents in terms of yield and vigor."
  },
  {
    id: "d111x_038",
    subject: "da-111",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Backcross breeding is used mainly for:",
    options: ["Inducing mutations", "Creating all new genetic combinations", "Developing new crop species", "Transferring one or few genes into an adapted variety"],
    correct: 3,
    explanation: "As per DA-111 notes: Backcross breeding is used for transferring one or a few genes (like disease resistance) into an already adapted variety without changing other characteristics."
  },
  {
    id: "d111x_039",
    subject: "da-111",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Mutation breeding uses which type of agents to induce mutations?",
    options: ["Temperature extremes only", "Hormones only", "Physical (X-rays, gamma rays) and chemical (EMS, colchicine) mutagens", "Natural selection only"],
    correct: 2,
    explanation: "As per DA-111 notes: Mutation breeding uses physical mutagens (X-rays, gamma rays) and chemical mutagens (EMS, colchicine) to induce mutations and create genetic variability."
  },
  {
    id: "d111x_040",
    subject: "da-111",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Polyploidy involves:",
    options: ["Multiplication of entire chromosome sets", "Point mutation in single gene", "Reduction in chromosome number", "Transfer of gene between species"],
    correct: 0,
    explanation: "As per DA-111 notes: Polyploidy refers to the condition of having more than two complete sets of chromosomes in the nucleus. Colchicine is used to induce polyploidy."
  },
  {
    id: "d111x_041",
    subject: "da-111",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Tissue culture in plant breeding is used for:",
    options: ["Weather forecasting", "Chemical analysis of plants", "Only disease diagnosis", "Rapid multiplication, production of disease-free plants, and haploid production"],
    correct: 3,
    explanation: "As per DA-111 notes: Tissue culture is used for rapid multiplication, production of disease-free plants, haploid production via anther culture, and somatic hybridization."
  },
  {
    id: "d111x_042",
    subject: "da-111",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Male sterility in plants refers to:",
    options: ["Plants unable to produce female gametes", "Plants with no flowers", "Plants with sterile seeds", "Plants unable to produce viable pollen"],
    correct: 3,
    explanation: "As per DA-111 notes: Male sterility refers to plants that cannot produce functional/viable pollen. It is used in hybrid seed production to prevent self-pollination of the seed parent."
  },
  {
    id: "d111x_043",
    subject: "da-111",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Cytoplasmic Male Sterility (CMS) is inherited through:",
    options: ["Nuclear chromosomes only", "Cytoplasm (maternal inheritance)", "Paternal inheritance only", "Both nuclear and cytoplasmic factors equally"],
    correct: 1,
    explanation: "As per DA-111 notes: Cytoplasmic Male Sterility (CMS) is determined by cytoplasmic (mitochondrial) genes and follows maternal (cytoplasmic) inheritance pattern."
  },
  {
    id: "d111x_044",
    subject: "da-111",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Genetic erosion refers to:",
    options: ["Loss of genetic diversity due to replacement of traditional varieties by modern varieties", "Physical erosion of soil reducing crop production in crop production", "Reduction in crop area due to urbanization in field conditions", "Mutation-induced loss of genetic information for agricultural purposes"],
    correct: 0,
    explanation: "As per DA-111 notes: Genetic erosion refers to the loss of genetic diversity when traditional varieties are replaced by modern high-yielding varieties. Conservation of genetic diversity through gene banks is important."
  },
  {
    id: "d111x_045",
    subject: "da-111",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "A germplasm collection is maintained to:",
    options: ["Test herbicides on different varieties", "Measure productivity of different varieties", "Produce commercial seeds only", "Preserve genetic diversity and provide material for breeding programs"],
    correct: 3,
    explanation: "As per DA-111 notes: Germplasm collections (gene banks) are maintained to preserve genetic diversity and provide breeding material for crop improvement programs."
  },
  {
    id: "d111x_046",
    subject: "da-111",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which organisation in India is responsible for plant variety protection?",
    options: ["ICAR", "Protection of Plant Varieties and Farmers Rights Authority (PPV&FRA)", "NBPGR", "NSC"],
    correct: 1,
    explanation: "As per DA-111 notes: The Protection of Plant Varieties and Farmers Rights Authority (PPV&FRA) under the PPV&FR Act 2001 is responsible for plant variety protection in India."
  },
  {
    id: "d111x_047",
    subject: "da-111",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "The seed chain follows the sequence:",
    options: ["Breeder → Nucleus → Foundation → Certified", "Nucleus → Breeder → Foundation → Certified", "Certified → Foundation → Breeder → Nucleus", "Foundation → Breeder → Certified → Nucleus"],
    correct: 1,
    explanation: "As per DA-111 notes: The seed production chain follows: Nucleus seed → Breeder seed → Foundation seed → Certified seed."
  },
  {
    id: "d111x_048",
    subject: "da-111",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "Nucleus seed is maintained by:",
    options: ["State Seed Corporation", "National Seeds Corporation", "Original breeder/plant breeder who developed the variety", "Farmers themselves"],
    correct: 2,
    explanation: "As per DA-111 notes: Nucleus seed is maintained by the original plant breeder who developed the variety. It is the source of all other seed classes."
  },
  {
    id: "d111x_049",
    subject: "da-111",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "The tag colour for Foundation seed (class I) is:",
    options: ["Red", "White", "Blue", "Golden yellow"],
    correct: 1,
    explanation: "As per DA-111 notes: Foundation seed (Class I) has a White tag, while Certified seed has Blue tag."
  },
  {
    id: "d111x_050",
    subject: "da-111",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "The tag colour for Certified seed is:",
    options: ["Red", "Blue", "White", "Golden yellow"],
    correct: 3,
    explanation: "As per DA-111 notes: Certified seed has a Blue tag. Foundation seed has White tag and Breeder seed has Golden yellow tag."
  },
  {
    id: "d111x_051",
    subject: "da-111",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "Germination percentage is tested in seed testing laboratory according to which rules?",
    options: ["State seed committee guidelines", "AOSA rules", "NSC standards only", "ISTA rules"],
    correct: 3,
    explanation: "As per DA-111 notes: Germination percentage and other seed quality parameters are tested according to ISTA (International Seed Testing Association) rules."
  },
  {
    id: "d111x_052",
    subject: "da-111",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "Seed viability refers to:",
    options: ["The resistance of seed to diseases in crop production", "The ability of a seed to germinate under favorable conditions", "The weight of 1000 seeds in field conditions", "The shelf life of seed in storage"],
    correct: 1,
    explanation: "As per DA-111 notes: Seed viability refers to the ability of a seed to germinate under favorable conditions. It is a measure of the living status of seeds."
  },
  {
    id: "d111x_053",
    subject: "da-111",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "The minimum germination percentage required for certified seed of rice is:",
    options: ["75%", "80%", "85%", "70%"],
    correct: 1,
    explanation: "As per DA-111 notes: The minimum germination percentage required for certified seed of rice is 80%."
  },
  {
    id: "d111x_054",
    subject: "da-111",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "Seed certification is done by:",
    options: ["Private companies only", "State Seed Certification Agency", "ICAR directly", "Farmers themselves"],
    correct: 1,
    explanation: "As per DA-111 notes: Seed certification is done by State Seed Certification Agencies (SSCAs) established in each state."
  },
  {
    id: "d111x_055",
    subject: "da-111",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "Which method is used to test seed moisture content?",
    options: ["Cut test", "Hot air oven method", "Sand germination test", "Tetrazolium test"],
    correct: 1,
    explanation: "As per DA-111 notes: Seed moisture content is measured using the hot air oven method (standard method) or electric moisture meters."
  },
  {
    id: "d111x_056",
    subject: "da-111",
    lecture: "lecture-42",
    lectureNo: 42,
    question: "The tetrazolium test (TZ test) is used to determine:",
    options: ["Seed germination percentage", "Seed moisture content", "Seed viability and vigour (quick test)", "Seed purity"],
    correct: 2,
    explanation: "As per DA-111 notes: The tetrazolium test (TZ test) is used to quickly determine seed viability and vigor. Living cells reduce TZ solution to red-colored formazan."
  },
  {
    id: "d111x_057",
    subject: "da-111",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Seed dormancy is defined as:",
    options: ["The ability of a seed to germinate immediately after harvest", "Physical hardness of seed coat", "Loss of seed viability", "A state in which seeds fail to germinate even under favorable conditions"],
    correct: 3,
    explanation: "As per DA-111 notes: Seed dormancy is a state in which seeds fail to germinate even under apparently favorable environmental conditions."
  },
  {
    id: "d111x_058",
    subject: "da-111",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "Hard seed coat is a type of seed dormancy in which seeds fail to germinate because:",
    options: ["Seed coat is impermeable to water and gases", "Seeds have inhibitory chemicals", "Embryo is immature", "Seeds lack nutrition"],
    correct: 0,
    explanation: "As per DA-111 notes: Hard seed dormancy (physical dormancy) occurs because the seed coat is impermeable to water and gases, preventing germination. Scarification helps break it."
  },
  {
    id: "d111x_059",
    subject: "da-111",
    lecture: "lecture-45",
    lectureNo: 45,
    question: "Stratification is a method to break dormancy in which seeds are treated with:",
    options: ["Mechanical scarification", "Hot water for 30 minutes", "Cold and moist conditions for a period", "Strong acids"],
    correct: 2,
    explanation: "As per DA-111 notes: Stratification involves exposing seeds to cold moist conditions (0-10°C) for a period to break dormancy in many tree species."
  },
  {
    id: "d111x_060",
    subject: "da-111",
    lecture: "lecture-46",
    lectureNo: 46,
    question: "Seed vigour refers to:",
    options: ["Only germination percentage", "Weight of seeds per unit volume", "Potential of seeds for rapid, uniform germination and seedling emergence", "The overall physical condition of seed"],
    correct: 2,
    explanation: "As per DA-111 notes: Seed vigour refers to the sum total of properties that determine the potential for rapid, uniform germination and seedling development under a wide range of field conditions."
  },
  {
    id: "d111x_061",
    subject: "da-111",
    lecture: "lecture-47",
    lectureNo: 47,
    question: "Seed priming involves:",
    options: ["Coating seeds with fungicides", "Storing seeds at high temperature", "Controlled hydration of seeds to pre-germination stage without radicle emergence", "Mechanical scarification of seeds"],
    correct: 2,
    explanation: "As per DA-111 notes: Seed priming involves controlled hydration of seeds to allow pre-germinative metabolic processes to occur without radicle protrusion, improving germination speed and uniformity."
  },
  {
    id: "d111x_062",
    subject: "da-111",
    lecture: "lecture-48",
    lectureNo: 48,
    question: "Safe storage moisture content for cereals (wheat, rice) is:",
    options: ["15-18%", "Above 20%", "12% or below", "Below 9%"],
    correct: 2,
    explanation: "As per DA-111 notes: For safe storage of cereal seeds, moisture content should be maintained at 12% or below to prevent deterioration and fungal growth."
  },
  {
    id: "d111x_063",
    subject: "da-111",
    lecture: "lecture-48",
    lectureNo: 48,
    question: "Which chemical is commonly used as seed treatment fungicide?",
    options: ["Thiram (TMTD)", "DDT", "Paraquat", "2,4-D"],
    correct: 0,
    explanation: "As per DA-111 notes: Thiram (TMTD - Tetramethyl thiuram disulfide) is a commonly used seed treatment fungicide to protect seeds from soil-borne and seed-borne pathogens."
  },
  {
    id: "d111x_064",
    subject: "da-111",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "Which act governs seed quality and regulation in India?",
    options: ["Insecticides Act, 1966", "Plant Quarantine Act", "Seeds Act, 1966", "Prevention of Food Adulteration Act"],
    correct: 2,
    explanation: "As per DA-111 notes: The Seeds Act, 1966 is the main legislation that governs seed quality, certification, and regulation in India."
  },
  {
    id: "d111x_065",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The opening in the integuments of an ovule through which the pollen tube enters is called:",
    options: ["Micropyle", "Hilum", "Raphe", "Funicle"],
    correct: 0,
    explanation: "As per DA-111 notes: The integuments enclose the nucellus and leave an opening at the top of the ovule called micropyle. The pollen tube enters the embryo sac through the micropyle."
  },
  {
    id: "d111x_066",
    subject: "da-111",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Suvin cotton variety with 120 counts is equivalent to which country's cotton?",
    options: ["Egyptian cotton", "Chinese cotton", "Brazilian cotton", "American cotton"],
    correct: 0,
    explanation: "As per DA-111 notes: Suvin cotton with 120 counts is as equivalent to Egyptian cotton in quality. It was one of the greatest achievements in Cotton Research in India."
  },
  {
    id: "d111x_067",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Har Gobind Khorana is known for:",
    options: ["Inventing electron microscope", "Artificial synthesis of gene", "Proposing double helix DNA structure", "Proposing chromosome theory"],
    correct: 1,
    explanation: "As per DA-111 notes: Har Gobind Khorana is known for the artificial synthesis of gene, one of the landmark achievements in molecular biology."
  },
  {
    id: "d111x_068",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Knoll and Ruska (1932) built the first:",
    options: ["Phase contrast microscope", "Scanning electron microscope", "Light microscope", "Transmission electron microscope"],
    correct: 3,
    explanation: "As per DA-111 notes: Knoll and Ruska (1932) built the first transmission electron microscope, making study of cells and cell organelles easier."
  },
  {
    id: "d111x_069",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Norin 10 dwarfing gene in wheat was used to develop which types of varieties?",
    options: ["Disease-resistant varieties", "Long-duration varieties", "Early maturing varieties", "Semi-dwarf high-yielding varieties"],
    correct: 3,
    explanation: "As per DA-111 notes: After the invention of Norin 10-dwarfing gene, development of semi-dwarf varieties of wheat was started, which became the basis of the Green Revolution."
  },
  {
    id: "d111x_070",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Phytoremediation is the use of plants to:",
    options: ["Produce medicinal compounds", "Remove toxic substances from soil and water", "Improve soil organic matter", "Control weeds naturally"],
    correct: 1,
    explanation: "As per DA-111 notes: Phytoremediation involves using plants to remove, degrade, or contain toxic substances (heavy metals, pollutants) from contaminated soil and water."
  },
  {
    id: "d111x_071",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Assertion (A): Domestication is considered the most basic method of plant breeding.\nReason (R): Domestication involves bringing wild species under human management and selecting them for desired traits over generations.",
    options: ["A is true but R is false", "Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 1,
    explanation: "As per DA-111 notes: Domestication is the most basic method of plant breeding. Both A and R are true; R correctly explains A."
  },
  {
    id: "d111x_072",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Dwarfness in cereal varieties is associated with lodging resistance.\nReason (R): Dwarf varieties have shorter, stronger stems that can support the weight of heavy grain panicles without falling over.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-111 notes: Dwarfness in cereals is generally associated with lodging resistance and better fertilizer response. Both A and R are true; R explains A."
  },
  {
    id: "d111x_073",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Monoecious plants have both male and female flowers on the same plant.\nReason (R): Monoecious means 'one home' where both sexes are housed in the same individual plant.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-111 notes: Monoecious plants have both male and female flowers on the same plant. The term means 'one home'. Both A and R are true."
  },
  {
    id: "d111x_074",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Each Megaspore Mother Cell (MMC) ultimately produces only one functional megaspore.\nReason (R): MMC undergoes meiosis to produce four megaspores, but three of them degenerate, leaving only one functional megaspore.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-111 notes: MMC produces four megaspores through meiosis; three degenerate, leaving one functional megaspore. Both A and R are true."
  },
  {
    id: "d111x_075",
    subject: "da-111",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Assertion (A): F1 hybrids show heterosis (hybrid vigor) in terms of yield and growth.\nReason (R): Heterosis occurs due to the combination of superior alleles from both parents and dominance/overdominance effects in the F1 generation.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-111 notes: F1 hybrids show heterosis due to combination of superior alleles and dominance effects. Both A and R are true; R explains A."
  },
  {
    id: "d111x_076",
    subject: "da-111",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Assertion (A): Mutation breeding uses both physical and chemical mutagens.\nReason (R): Physical mutagens like X-rays and gamma rays and chemical mutagens like EMS alter DNA structure, creating new genetic variants.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true", "A is true but R is false", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 0,
    explanation: "As per DA-111 notes: Mutation breeding uses both types of mutagens. H.J. Muller (1927) and L.J. Stadler (1928) laid the foundation for mutation breeding. Both A and R are true."
  },
  {
    id: "d111x_077",
    subject: "da-111",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Assertion (A): Male sterility is extensively used in hybrid seed production.\nReason (R): Male sterile plants cannot produce pollen, so they must be fertilized by pollen from another line, ensuring all seeds are hybrids.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-111 notes: Male sterility prevents self-pollination, ensuring hybrid seed production when pollinated by fertile lines. Both A and R are true; R explains A."
  },
  {
    id: "d111x_078",
    subject: "da-111",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "Assertion (A): Nucleus seed is the highest quality class in the seed production chain.\nReason (R): Nucleus seed is produced and maintained by the original plant breeder; it is the source from which all other seed classes are derived.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-111 notes: Nucleus seed is the highest quality class maintained by the breeder. All other seed classes (breeder, foundation, certified) are derived from it. Both A and R are true."
  },
  {
    id: "d111x_079",
    subject: "da-111",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "Assertion (A): Seed certification ensures that only high quality seeds of notified varieties reach the farmer.\nReason (R): Seed certification agencies conduct field inspections and laboratory tests to verify that seeds meet prescribed standards for genetic purity and quality.",
    options: ["A is true but R is false", "Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 1,
    explanation: "As per DA-111 notes: Seed certification ensures quality through field inspections and lab tests. Both A and R are true; R correctly explains A."
  },
  {
    id: "d111x_080",
    subject: "da-111",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "Assertion (A): Some pulse seeds have a hard seed coat that prevents germination.\nReason (R): Hard seed dormancy is due to an impermeable seed coat that prevents water and gas uptake necessary for germination.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true", "A is true but R is false", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 0,
    explanation: "As per DA-111 notes: Hard seed coat prevents water/gas uptake in many pulse seeds. Both A and R are true; R correctly explains A."
  },
  {
    id: "d111x_081",
    subject: "da-111",
    lecture: "lecture-48",
    lectureNo: 48,
    question: "Assertion (A): Seeds should be stored at low moisture content to maintain viability.\nReason (R): High moisture content promotes microbial activity, respiration, and fungal growth which rapidly deteriorate seeds in storage.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-111 notes: Seeds at high moisture content lose viability quickly due to microbial growth and respiration. Low moisture (≤12%) is required for safe storage. Both A and R are true."
  },
  {
    id: "d111x_082",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Non-shattering characteristic is an important breeding objective in greengram.\nReason (R): Shattering of pods at maturity causes significant yield loss in greengram before and during harvest.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-111 notes: Pod shattering is a serious problem in greengram, causing yield losses. Non-shattering is an important breeding objective. Both A and R are true."
  },
  {
    id: "d111x_083",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Development of photo and thermo-insensitive varieties helps in expanding crop cultivation area.\nReason (R): Varieties sensitive to photoperiod and temperature are restricted to specific regions; insensitive varieties can be grown across different latitudes and seasons.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-111 notes: Photo and thermo-insensitive varieties of wheat and rice allowed their cultivation in new areas. Both A and R are true; R correctly explains A."
  },
  {
    id: "d111x_084",
    subject: "da-111",
    lecture: "lecture-42",
    lectureNo: 42,
    question: "Assertion (A): The tetrazolium (TZ) test is a quick method to assess seed viability.\nReason (R): TZ salt is reduced to red-colored formazan by living (respiring) cells, staining viable embryo tissues red while dead tissue remains unstained.",
    options: ["A is true but R is false", "Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 1,
    explanation: "As per DA-111 notes: TZ test is a quick viability test. Living cells reduce TZ to red formazan; dead cells don't stain. Both A and R are true; R correctly explains A."
  },
  {
    id: "d111x_085",
    subject: "da-111",
    lecture: "lecture-61",
    lectureNo: 61,
    question: "Assertion (A): Seed priming improves germination speed and uniformity.\nReason (R): During priming, pre-germination metabolic activities occur within the seed, making it metabolically ready to germinate quickly when conditions are favorable.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-111 notes: Seed priming allows pre-germinative activities, improving germination speed and uniformity. Both A and R are true."
  },
  {
    id: "d111x_086",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the scientists with their contributions:\n     Column-I (Scientist)        |  Column-II (Year)            |  Column-III (Contribution)\nA.  Gregor John Mendel           |  1.  1953                     |  i.   Double helix DNA\nB.  Watson and Crick             |  2.  1914                     |  ii.  Coined 'heterosis'\nC.  G.H. Shull                   |  3.  1850                     |  iii. Laws of inheritance\nD.  Hugo de Vries                |  4.  1900                     |  iv.  First used term mutation",
    options: ["A-1-i,   B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-1-i,   C-2-ii,   D-4-iv", "A-4-iv,  B-3-iii, C-1-i,    D-2-ii", "A-2-ii,  B-4-iv,  C-1-i,    D-3-iii"],
    correct: 1,
    explanation: "As per DA-111 notes: Mendel (1850) - Laws of inheritance; Watson & Crick (1953) - Double helix DNA; G.H. Shull (1914) - Coined heterosis; Hugo de Vries (1900) - First used term mutation."
  },
  {
    id: "d111x_087",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the crop breeding milestones:\n     Column-I (Crop)             |  Column-II (Year)            |  Column-III (Achievement)\nA.  Sugarcane                    |  1.  1961                     |  i.   First hybrid Ganga-1\nB.  Maize                        |  2.  1912                     |  ii.  SBI established at Coimbatore\nC.  Cotton                       |  3.  1965                     |  iii. CCRI established at Nagpur\nD.  Wheat                        |  4.  1964                     |  iv.  AICRP on wheat started",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii"],
    correct: 0,
    explanation: "As per DA-111 notes: Sugarcane-1912 (SBI Coimbatore); Maize-1961 (Ganga-1, first hybrid); Cotton-1965 (CCRI Nagpur); Wheat-1964 (AICRP on wheat at IARI)."
  },
  {
    id: "d111x_088",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the floral whorls with their components:\n     Column-I (Whorl)            |  Column-II (Components)      |  Column-III (Function)\nA.  Calyx                        |  1.  Stamens, anthers, filaments |  i.  Produces pollen\nB.  Corolla                      |  2.  Sepals               |  ii. Protects unopened bud\nC.  Androecium                   |  3.  Carpels (stigma, style, ovary) | iii. Produces ovules\nD.  Gynoecium                    |  4.  Petals               |  iv. Attracts pollinators",
    options: ["A-1-i,  B-3-iii, C-2-ii,   D-4-iv", "A-4-iv, B-2-ii,  C-3-iii,  D-1-i", "A-2-ii, B-4-iv,  C-1-i,   D-3-iii", "A-3-iii, B-1-i,  C-4-iv,   D-2-ii"],
    correct: 2,
    explanation: "As per DA-111 notes: Calyx (sepals, protects bud); Corolla (petals, attracts pollinators); Androecium (stamens, produces pollen); Gynoecium (carpels, produces ovules)."
  },
  {
    id: "d111x_089",
    subject: "da-111",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "Match the seed classes with their tag colours:\n     Column-I (Seed class)       |  Column-II (Tag colour)      |  Column-III (Produced by)\nA.  Nucleus seed                 |  1.  White                    |  i.   State Seed Corp/private\nB.  Breeder seed                 |  2.  No standard tag          |  ii.  Original plant breeder\nC.  Foundation seed              |  3.  Golden yellow            |  iii. Original plant breeder\nD.  Certified seed               |  4.  Blue                     |  iv.  Registered seed growers",
    options: ["A-3-iii, B-1-i,  C-4-iv,   D-2-ii", "A-4-iv, B-2-ii,  C-3-iii,  D-1-i", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 2,
    explanation: "As per DA-111 notes: Nucleus seed (maintained by original breeder, no standard tag); Breeder seed (golden yellow, original breeder); Foundation seed (white, state seed corp); Certified seed (blue, registered growers)."
  },
  {
    id: "d111x_090",
    subject: "da-111",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Match the dormancy types with their mechanisms:\n     Column-I (Dormancy type)    |  Column-II (Mechanism)       |  Column-III (Method to break)\nA.  Physical dormancy            |  1.  Immature embryo          |  i.   After-ripening (storage)\nB.  Physiological dormancy       |  2.  Inhibitory chemicals     |  ii.  Water washing, GA3\nC.  Chemical dormancy            |  3.  Impermeable seed coat    |  iii. Scarification\nD.  Morphological dormancy       |  4.  ABA, other inhibitors    |  iv.  Cold stratification",
    options: ["A-1-i,   B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-4-iv,  C-2-ii,   D-1-i", "A-2-ii,  B-3-iii, C-4-iv,   D-1-i", "A-4-iv,  B-1-i,   C-2-ii,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-111 notes: Physical dormancy (impermeable coat, scarification); Physiological dormancy (ABA/inhibitors, cold stratification); Chemical dormancy (inhibitory chemicals, washing/GA3); Morphological dormancy (immature embryo, after-ripening)."
  },
  {
    id: "d111x_091",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the parts of the ovule with their descriptions:\n     Column-I (Part)             |  Column-II (Description)     |  Column-III (Function)\nA.  Funicle                      |  1.  Outer covering of ovule  |  i.   Protects ovule\nB.  Integuments                  |  2.  Stalk of ovule           |  ii.  Attachment to placenta\nC.  Micropyle                    |  3.  Female gametophyte       |  iii. Pollen tube entry\nD.  Embryo sac                   |  4.  Opening in integuments   |  iv.  Contains egg cell",
    options: ["A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-4-iii,  D-3-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii"],
    correct: 1,
    explanation: "As per DA-111 notes: Funicle (stalk, attachment to placenta); Integuments (outer covering, protection); Micropyle (opening, pollen tube entry); Embryo sac (female gametophyte, contains egg cell)."
  },
  {
    id: "d111x_092",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match the breeding objectives with the crop examples:\n     Column-I (Objective)        |  Column-II (Crop)            |  Column-III (Substance/Feature)\nA.  Remove neurotoxin            |  1.  Brassica/Mustard         |  i.   Erucic acid removal\nB.  Remove erucic acid           |  2.  Cotton                   |  ii.  Gossypol removal\nC.  Remove gossypol              |  3.  Greengram                |  iii. Non-shattering\nD.  Non-shattering pods          |  4.  Khesari (Lathyrus)       |  iv.  ODAP neurotoxin removal",
    options: ["A-2-ii, B-3-iii, C-4-iv,   D-1-i", "A-3-iii, B-2-ii, C-1-i,    D-4-iv", "A-1-i,  B-4-iv,  C-3-iii,  D-2-ii", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii"],
    correct: 3,
    explanation: "As per DA-111 notes: Khesari=ODAP neurotoxin removal; Brassica=Erucic acid removal; Cotton=Gossypol removal; Greengram=Non-shattering pods are key breeding objectives."
  },
  {
    id: "d111x_093",
    subject: "da-111",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "Match the seed quality tests with their parameters:\n     Column-I (Test)             |  Column-II (Parameter tested)|  Column-III (Method)\nA.  Germination test             |  1.  Seed moisture            |  i.   Hot air oven\nB.  Moisture content test        |  2.  Genetic purity           |  ii.  Field grow-out\nC.  Purity analysis              |  3.  % germination            |  iii. Sand/paper germination\nD.  Variety identification       |  4.  Physical purity          |  iv.  Blotter/mechanical separation",
    options: ["A-1-i,   B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv,  B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-1-i,   C-4-iv,   D-2-ii", "A-2-ii,  B-4-iv,  C-1-i,    D-3-iii"],
    correct: 2,
    explanation: "As per DA-111 notes: Germination test (% germination, sand/blotter method); Moisture test (moisture content, hot air oven); Purity analysis (physical purity, mechanical separation); Variety identification (genetic purity, field grow-out)."
  },
  {
    id: "d111x_094",
    subject: "da-111",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the sugarcane variety prefixes with their origins:\n     Column-I (Prefix)           |  Column-II (Origin state)    |  Column-III (Meaning)\nA.  CO                           |  1.  Bihar                    |  i.   Bihar Origin\nB.  BO                           |  2.  Coimbatore               |  ii.  Coimbatore Origin\nC.  TV (Tea)                     |  3.  All India                |  iii. Clonal variety\nD.  St (Tea seed)                |  4.  Jorhat                   |  iv.  Seed variety",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii,   D-1-i"],
    correct: 2,
    explanation: "As per DA-111 notes: CO prefix=Coimbatore origin varieties; BO prefix=Bihar origin varieties; TV (tea)=clonal varieties from Jorhat; St=seed varieties from Jorhat."
  },
  {
    id: "d111x_095",
    subject: "da-111",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Match the pollination types with their examples:\n     Column-I (Type)             |  Column-II (Crop example)    |  Column-III (Agent)\nA.  Self-pollination             |  1.  Papaya, date palm        |  i.   Insects/wind (other plant)\nB.  Cross-pollination            |  2.  Maize, castor            |  ii.  Same plant but different flowers\nC.  Allogamy (monoecious)        |  3.  Rice, wheat, pea         |  iii. Same flower\nD.  Dioecious cross              |  4.  Maize, cucumber          |  iv.  Insects/wind (separate plant)",
    options: ["A-1-i,   B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii,  B-3-iii, C-4-iv,   D-1-i", "A-4-iv,  B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-1-iv,  C-2-ii,   D-4-i"],
    correct: 3,
    explanation: "As per DA-111 notes: Self-pollination (rice, wheat, pea - same flower); Cross-pollination/dioecious (papaya, date palm - separate plants, insects/wind); Monoecious allogamy (maize, castor - same plant different flowers); Dioecious cross (maize, cucumber - separate plant insects/wind)."
  },
  {
    id: "d111x_096",
    subject: "da-111",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Match the breeding methods with the crop types:\n     Column-I (Breeding method)  |  Column-II (Suitable for)    |  Column-III (Main use)\nA.  Pure line selection          |  1.  Cross-pollinated crops   |  i.   Mass improvement\nB.  Mass selection               |  2.  Self-pollinated crops    |  ii.  Individual plant selection\nC.  Hybrid breeding              |  3.  Self-pollinated crops    |  iii. Exploiting heterosis\nD.  Backcross breeding           |  4.  Both crop types          |  iv.  Gene transfer",
    options: ["A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-4-i,   C-1-iii,  D-3-iv"],
    correct: 3,
    explanation: "As per DA-111 notes: Pure line selection (self-pollinated, individual plant selection); Mass selection (both types, mass improvement); Hybrid breeding (cross-pollinated, exploiting heterosis); Backcross breeding (both types, gene transfer)."
  },
  {
    id: "d111x_097",
    subject: "da-111",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the embryo sac components with their roles:\n     Column-I (Component)        |  Column-II (Number)          |  Column-III (Role/Function)\nA.  Egg cell                     |  1.  3 cells                  |  i.   Later degenerate\nB.  Synergids                    |  2.  1 cell                   |  ii.  Female gamete, forms embryo\nC.  Antipodal cells              |  3.  2 nuclei                 |  iii. Guide pollen tube\nD.  Polar nuclei                 |  4.  2 cells                  |  iv.  Fuse with sperm to form endosperm",
    options: ["A-1-i,  B-3-iii, C-4-iv,   D-2-ii", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii", "A-2-ii, B-4-iii,  C-1-i,   D-3-iv", "A-3-iii, B-2-ii, C-1-i,    D-4-iv"],
    correct: 2,
    explanation: "As per DA-111 notes: Egg cell (1 cell, female gamete, forms embryo); Synergids (2 cells, guide pollen tube, then degenerate); Antipodal cells (3 cells, later degenerate); Polar nuclei (2 nuclei, fuse with sperm to form triploid endosperm)."
  },
  {
    id: "d111x_098",
    subject: "da-111",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match the crop with maturity duration improvements through plant breeding:\n     Column-I (Crop)             |  Column-II (Original duration)|  Column-III (Reduced duration)\nA.  Cotton                       |  1.  360 days                 |  i.   270 days\nB.  Pigeonpea                    |  2.  270 days                 |  ii.  120 days\nC.  Sugarcane                    |  3.  270 days                 |  iii. 170 days\nD.  Sugarcane (further reduced)  |  4.  360 days                 |  iv.  270 days (same as C)",
    options: ["A-2-iii, B-3-ii,  C-1-i,   D-4-iv", "A-4-iv,  B-1-i,   C-3-iii,  D-2-ii", "A-1-i,   B-4-iv,  C-2-iii,  D-3-ii", "A-3-iii, B-2-ii,  C-4-i,   D-1-iv"],
    correct: 3,
    explanation: "As per DA-111 notes: Cotton: 270 days → 170 days; Pigeonpea: 270 days → 120 days; Sugarcane: 360 days → 270 days."
  },
  {
    id: "d111x_099",
    subject: "da-111",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "Match the seed quality parameters with their importance:\n     Column-I (Parameter)        |  Column-II (Standard)        |  Column-III (Test used)\nA.  Germination (rice certified) |  1.  12% or below             |  i.   Hot air oven\nB.  Germination (wheat certified)|  2.  80% minimum              |  ii.  Blotter/sand germination\nC.  Moisture content (cereals)   |  3.  85% minimum              |  iii. Blotter/sand germination\nD.  Seed vigour                  |  4.  Not fixed, high preferred|  iv.  Accelerated aging test",
    options: ["A-3-iii, B-2-ii,  C-1-i,   D-4-iv", "A-4-iv,  B-1-i,   C-3-iii,  D-2-ii", "A-1-i,   B-4-iv,  C-2-ii,  D-3-iii", "A-2-ii, B-3-iii,  C-1-i,   D-4-iv"],
    correct: 3,
    explanation: "As per DA-111 notes: Germination rice certified seed: 80% minimum; Germination wheat certified: 85% minimum; Moisture cereals: 12% or below (hot air oven); Seed vigour: accelerated aging test."
  },
  {
    id: "d111x_100",
    subject: "da-111",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "Match the seed treatment chemicals with their action:\n     Column-I (Chemical)         |  Column-II (Type)            |  Column-III (Target pathogen/pest)\nA.  Thiram (TMTD)                |  1.  Systemic fungicide       |  i.   Soil-borne and seed-borne fungi\nB.  Carbendazim                  |  2.  Contact fungicide        |  ii.  Blast, blight in cereals\nC.  Imidacloprid                 |  3.  Neonicotinoid insecticide|  iii. Sucking pests, aphids\nD.  Trichoderma viride           |  4.  Biocontrol agent         |  iv.  Soil-borne fungi (eco-friendly)",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii,   D-1-i"],
    correct: 2,
    explanation: "As per DA-111 notes: Thiram (contact fungicide, soil/seed-borne fungi); Carbendazim (systemic fungicide, blast/blight); Imidacloprid (neonicotinoid insecticide, sucking pests); Trichoderma viride (biocontrol, soil-borne fungi)."
  },
  {
    id: "d111x_101",
    subject: "da-111",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Breeder seed in the seed production chain is produced by:",
    options: ["State seed corporations under government supervision", "The original plant breeder or designated institution under direct supervision of the breeder", "Certified seed producers registered with NSC", "Farmers selected by the State Agriculture Department"],
    correct: 1,
    explanation: "Breeder seed is produced by or under the direct supervision of the plant breeder (agricultural university or research institution) who developed the variety. It is the progeny of nucleus seed and is the source for foundation seed production. It has the highest genetic purity.",
    difficulty: "medium"
  },
  {
    id: "d111x_102",
    subject: "da-111",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A test cross in genetics (crossing a dominant-phenotype individual with a homozygous recessive parent) is used to:",
    options: ["Produce commercial hybrid seed for farmers", "Determine whether the dominant-phenotype individual is homozygous (AA) or heterozygous (Aa)", "Increase heterozygosity of the breeding population", "Estimate general combining ability (GCA) of inbred lines"],
    correct: 1,
    explanation: "A test cross (dominant phenotype × homozygous recessive aabb...) reveals the genotype of the dominant parent. If progeny ratio is 1:1 (dominant:recessive), the tested parent is heterozygous (Aa); if all progeny show dominant phenotype, the tested parent is homozygous (AA).",
    difficulty: "hard"
  },
  {
    id: "d111x_103",
    subject: "da-111",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Heterosis (hybrid vigour) is defined as the:",
    options: ["Uniform performance of all plants in a pure line variety", "Superiority of F1 hybrids over the better parent for yield and vigour", "Inbreeding depression observed after selfing cross-pollinated crops", "Additive gene effects accumulating over generations of selection"],
    correct: 1,
    explanation: "Heterosis (hybrid vigour), coined by G.H. Shull (1914), is the superiority of F1 hybrids over the better parent (or mid-parent) in traits like yield, growth rate, disease resistance, and adaptability. It is commercially exploited in maize, sorghum, bajra, cotton, and vegetable hybrids.",
    difficulty: "easy"
  },
];
