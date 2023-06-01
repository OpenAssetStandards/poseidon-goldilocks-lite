import { 
  hexToHashOut,
  hashOutToHex,
  hexArrayToHashOutArray,
  hashOutArrayToHexArray,
  twoToOneHex,
 } from '../src';

describe('Poseidon Goldilocks Hexadecimal Extensions', () => {
  it('Hash Out to Hex', () => {
    expect(hashOutToHex([BigInt("0"), BigInt("0"), BigInt("0"), BigInt("0")])).toEqual("0x0000000000000000000000000000000000000000000000000000000000000000");
    expect(hashOutToHex([BigInt("1"), BigInt("1"), BigInt("1"), BigInt("1")])).toEqual("0x0000000000000001000000000000000100000000000000010000000000000001");
    expect(hashOutToHex([BigInt("1"), BigInt("6969"), BigInt("1337"), BigInt("1337")])).toEqual("0x000000000000053900000000000005390000000000001b390000000000000001");
    expect(hashOutToHex([BigInt("6177512013833504623"), BigInt("14774370911150985256"), BigInt("16210096274604345549"), BigInt("16137241347593693704")])).toEqual("0xdff2ff81c2116a08e0f5d4ad4eacc8cdcd091c10d304d02855baee725c41076f");
    expect(hashOutToHex([BigInt("10597026328714256670"), BigInt("12948491969189752347"), BigInt("12118296623740004424"), BigInt("4750781611001633413")])).toEqual("0x41ee2ab45935da85a82cd692e4d6a848b3b248d7888dae1b9310334cee79a11e");
    expect(hashOutToHex([BigInt("3744580260740491682"), BigInt("11631709895505456286"), BigInt("7776750047601557950"), BigInt("2286099389494734495")])).toEqual("0x1fb9db4850122e9f6bec90f71e4b01bea16c2285c3ffac9e33f76be8526069a2");
    expect(hashOutToHex([BigInt("16373470893189336263"), BigInt("85230983528538710"), BigInt("16482324575916904721"), BigInt("8047316567099793786")])).toEqual("0x6fadcfc80119617ae4bcfadfec37d111012ecd20c1136256e33a4106e8bf8cc7");
    expect(hashOutToHex([BigInt("11713120667835864488"), BigInt("4386963861389317624"), BigInt("3713207733218188984"), BigInt("13927508205237288134")])).toEqual("0xc14872ebeb81bcc63387f6c28bb41eb83ce1a063889615f8a28d5d3049a495a8");
    expect(hashOutToHex([BigInt("2734249522836103509"), BigInt("11624797338769479164"), BigInt("3848930693307792934"), BigInt("742708374083796674")])).toEqual("0x0a4ea154c8f8fec2356a2612b3b57e26a1539396bb42d5fc25f201744fed6155");
    expect(hashOutToHex([BigInt("7460118563805790724"), BigInt("9972966250193354088"), BigInt("4872128686847356726"), BigInt("10889731475756592542")])).toEqual("0x97201914b7dcad9e439d473a1f86ef368a6717f72bbbfd686787aa4ef1f10204");
    expect(hashOutToHex([BigInt("15909176935852753609"), BigInt("7776824408475619903"), BigInt("60266539350820279"), BigInt("17600050358262327882")])).toEqual("0xf43ff08d41366a4a00d61c1925d905b76becd4989bc6d23fdcc8c021fa5742c9");
    expect(hashOutToHex([BigInt("16691956356073036015"), BigInt("2702053803602855559"), BigInt("8043711973620354962"), BigInt("16330707045999820413")])).toEqual("0xe2a25388d7c9be7d6fa1016c2f328f92257f9f9e47bdc687e7a5bdde3a0e98ef");
    expect(hashOutToHex([BigInt("11634607652900134293"), BigInt("16371227758882084640"), BigInt("11875660703600010954"), BigInt("12763922391744681034")])).toEqual("0xb1228fca0498944aa4ced27d6f24e6cae33248e8812e5720a1766e047c275d95");
    expect(hashOutToHex([BigInt("15045708290979456466"), BigInt("4571462940738225779"), BigInt("280809119002343804"), BigInt("18081538345400693053")])).toEqual("0xfaee87533636713d03e5a267ebd3397c3f711952ee908673d0cd17f99dfae5d2");
    expect(hashOutToHex([BigInt("3303368610647087322"), BigInt("13644787359971547566"), BigInt("16969117080621577128"), BigInt("13055842290771498221")])).toEqual("0xb52fab6400f514edeb7e6a141e7673a8bd5c05cf8ad819ae2dd7ec3fd7cb98da");
    expect(hashOutToHex([BigInt("11123008960579322770"), BigInt("17391550887562943309"), BigInt("2701792198668335642"), BigInt("15573708795405459916")])).toEqual("0xd820eda2e984e1cc257eb1b0a28c3a1af15b33634a519b4d9a5cddb7a8d14392");
    expect(hashOutToHex([BigInt("9960600721534811836"), BigInt("17928314515175686441"), BigInt("99317755060907588"), BigInt("18296318977966378961")])).toEqual("0xfde9952c22ec8fd10160d8f8d64b6e44f8ce2b103286c1298a3b29952c94febc");
    expect(hashOutToHex([BigInt("2426031527256185512"), BigInt("17731620025045441723"), BigInt("15693040274743820534"), BigInt("15247564843620905096")])).toEqual("0xd39a3b70b1c23088d9c8e0fc0e0100f6f6135e7775095cbb21aafed20400daa8");
    expect(hashOutToHex([BigInt("13174685655698287818"), BigInt("5828154395012889067"), BigInt("11974806148509883468"), BigInt("4322291860671982760")])).toEqual("0x3bfbdd8bfaea6ca8a62f0ebf30185c4c50e1c38b1adff9ebb6d5e2cd2754acca");
    expect(hashOutToHex([BigInt("2587327035061459937"), BigInt("1430601821174684104"), BigInt("7252589285554501578"), BigInt("10843672967486753016")])).toEqual("0x967c771c978dc8f864a65f878347b7ca13da84c6d624d9c823e8083aea9a5be1");
    expect(hashOutToHex([BigInt("4087919733198949981"), BigInt("2072436219206500197"), BigInt("16067035361180347262"), BigInt("10302260378650402311")])).toEqual("0x8ef8fb3b0d09de07def99388c0cb6b7e1cc2c5c2d974ff6538bb3556afa20e5d");
    expect(hashOutToHex([BigInt("15169565645891938868"), BigInt("15774246000806207361"), BigInt("9381859270706960207"), BigInt("2928027481147359536")])).toEqual("0x28a2717b125ec13082330f4cab31974fdae9612985ae1f81d2851f95485baa34");
    expect(hashOutToHex([BigInt("7600490351795220391"), BigInt("12366090164383306833"), BigInt("5546599483745791408"), BigInt("10730813569946192174")])).toEqual("0x94eb82166b95892e4cf97ad7e4086db0ab9d2d7c7484d451697a5db4b189afa7");
    expect(hashOutToHex([BigInt("647581971955081256"), BigInt("1665714673924857604"), BigInt("10325539768741065825"), BigInt("8337264481894648097")])).toEqual("0x73b3e9dfa1cfc9218f4bafb66dfaf461171dceabac725f0408fcac5f59546028");
    expect(hashOutToHex([BigInt("1145195865327449283"), BigInt("9319852167643256228"), BigInt("12236003558260724774"), BigInt("15841487280781678481")])).toEqual("0xdbd844c004dc5791a9cf0468388bd4268156c42af387d5a40fe48d926f16b4c3");
    expect(hashOutToHex([BigInt("12940918365038861164"), BigInt("14073729048834774700"), BigInt("13092099544298308285"), BigInt("9076025051113283153")])).toEqual("0x7df484b278275e51b5b07b2badf442bdc34fee010ce496acb39760b067785b6c");
    expect(hashOutToHex([BigInt("6671191428367011992"), BigInt("5053397764103346391"), BigInt("5801038090017566890"), BigInt("14934056238588716946")])).toEqual("0xcf406d0664c9679250816d685c01f0aa4621467e0e2218d75c94d54234725098");
    expect(hashOutToHex([BigInt("3367393399871967799"), BigInt("2613965716094475898"), BigInt("9070093369605439977"), BigInt("9693274822297957804")])).toEqual("0x86856e17fd4eb5ac7ddf71dd3ef541e92446abf82adc5e7a2ebb6274ba5d1237");
    expect(hashOutToHex([BigInt("16769124810403448566"), BigInt("2421953330201095804"), BigInt("2820900925887010306"), BigInt("18331665226798906236")])).toEqual("0xfe67286600babb7c2725da724210d602219c81b8c535ee7ce8b7e62b1e4986f6");
    expect(hashOutToHex([BigInt("11887983924633410593"), BigInt("7105407151096543934"), BigInt("2111688795984266125"), BigInt("418847412946523792")])).toEqual("0x05d00b80bfc4d6901d4e39c590d0838d629b7a2869a13abea4fa9a64eb541c21");
    expect(hashOutToHex([BigInt("11446844338707752106"), BigInt("1076080465862666582"), BigInt("2400475031804104271"), BigInt("11350965947639323015")])).toEqual("0x9d86bb63ae98d98721503352bae0ce4f0eef017b7d7b29569edb5c472fdde4aa");
    expect(hashOutToHex([BigInt("1759775221936612141"), BigInt("17212306492307528933"), BigInt("17982429324668326633"), BigInt("9010218878920922843")])).toEqual("0x7d0aba550a9996dbf98e6c321f6c52e9eede658f5f23dce5186bfa3d9c10e32d");
    expect(hashOutToHex([BigInt("1473160815593059826"), BigInt("8665157579609135200"), BigInt("12680464980948804010"), BigInt("436746732453141993")])).toEqual("0x060fa2d6d4ae9de9affa0fb7583be1aa7840d2e89f62d8601471b7f4e672f5f2");
    expect(hashOutToHex([BigInt("18098489603968205339"), BigInt("5949186346133801711"), BigInt("9970539595863925517"), BigInt("9452920765730126428")])).toEqual("0x832f855a4b41fa5c8a5e78efae6fa30d528fc1762fe8caeffb2ac067a7a0021b");
    expect(hashOutToHex([BigInt("11381292433091211965"), BigInt("18360363738984048712"), BigInt("6924220025466437940"), BigInt("9768945691484185579")])).toEqual("0x879244592aff63eb6017c56d5492c134fecd1d8b111b68489df2792acf3e32bd");
  });
  it('Hex to Hash Out', () => {
    expect(hexToHashOut("0x0000000000000000000000000000000000000000000000000000000000000000")).toEqual([BigInt("0"), BigInt("0"), BigInt("0"), BigInt("0")]);
    expect(hexToHashOut("0x0000000000000001000000000000000100000000000000010000000000000001")).toEqual([BigInt("1"), BigInt("1"), BigInt("1"), BigInt("1")]);
    expect(hexToHashOut("0x000000000000053900000000000005390000000000001b390000000000000001")).toEqual([BigInt("1"), BigInt("6969"), BigInt("1337"), BigInt("1337")]);
    expect(hexToHashOut("0x76682910a2b8cd8cee85045940ebcfaf45c325b37f704b3968997d13eeab2d34")).toEqual([BigInt("7537192975943281972"), BigInt("5026903061943044921"), BigInt("17187148334317162415"), BigInt("8532114645479640460")]);
    expect(hexToHashOut("0x3b9d6185967ae90a5001b6bfb266299140a209e9255bdf4234392530102e7be4")).toEqual([BigInt("3763079852004899812"), BigInt("4657295861613322050"), BigInt("5765089932458994065"), BigInt("4295696845964503306")]);
    expect(hexToHashOut("0xb46c2c50d8359cf69f16470c6e74828107ab7b20290d7d76abb55db26edd6131")).toEqual([BigInt("12372898572215869745"), BigInt("552670757340937590"), BigInt("11463428020236485249"), BigInt("13000814950048177398")]);
    expect(hexToHashOut("0x1a045d6a227c424055b86682e89f07572c0d8223f9ccddd0a357422f8e7a6e9e")).toEqual([BigInt("11769948923177365150"), BigInt("3174336403392486864"), BigInt("6176799601373153111"), BigInt("1874726055319454272")]);
    expect(hexToHashOut("0x5250cdd54742840d031c804926cfc24ac5738c18ed45bafefe04ff746c0488db")).toEqual([BigInt("18304035661034064091"), BigInt("14227869686481402622"), BigInt("224195133133800010"), BigInt("5931467025154212877")]);
    expect(hexToHashOut("0x0b7029c8a179e678c12c11f29b9b3d4ee6a41adcb6188d632f46b514c8519eea")).toEqual([BigInt("3406609269017124586"), BigInt("16619438060154162531"), BigInt("13919520281985760590"), BigInt("824204673488119416")]);
    expect(hexToHashOut("0x1b1c4bbc1b958eed51b283b261fec25ae51025ae870cc5817e5d8f48fcb0319e")).toEqual([BigInt("9105591565252833694"), BigInt("16505734065833166209"), BigInt("5886912465098162778"), BigInt("1953519609660673773")]);
    expect(hexToHashOut("0x64fb8d73036952ebf164d90464d74d1e535310197ca33473dfeac57e27dd5442")).toEqual([BigInt("16134925760633590850"), BigInt("6004160429866300531"), BigInt("17394266273706626334"), BigInt("7276565148065157867")]);
    expect(hexToHashOut("0xeeb78d5137c56f1203048cf915387285a68bcc04a3e53df88a5a87a00d75821b")).toEqual([BigInt("9969429846628336155"), BigInt("12000909952360463864"), BigInt("217453683451392645"), BigInt("17201372681732452114")]);
    expect(hexToHashOut("0x3650501de6b660e03aadb8d4baea07328912df87b5ff4ab58b73833c9fc7c0e5")).toEqual([BigInt("10048519489995653349"), BigInt("9877202706743904949"), BigInt("4228238848979240754"), BigInt("3913716165539946720")]);
    expect(hexToHashOut("0x694f01ccea4c2dba211ef2a7e6e98a32b7fcb22685b5f25093c66647734488b5")).toEqual([BigInt("10648310826026698933"), BigInt("13257667281593692752"), BigInt("2386611655500466738"), BigInt("7588285876758392250")]);
    expect(hexToHashOut("0xeeb232c34aa51ca0f8e546fd464f884888c2f2c08d844a8cb15dfc23fc95bd23")).toEqual([BigInt("12780648549039062307"), BigInt("9854705843461966476"), BigInt("17934819144693155912"), BigInt("17199865741233691808")]);
    expect(hexToHashOut("0xdd3895e41752a53fa0d0404b17da1bf427d93e3f89c62afd176ef78ca7e96528")).toEqual([BigInt("1688559093795087656"), BigInt("2871394680040729341"), BigInt("11587832532491181044"), BigInt("15940655687954244927")]);
    expect(hexToHashOut("0xa096f0274ee2e3e8addd2a705593452fc6ca416677beaaf4deb146cb06162d78")).toEqual([BigInt("16046684785092210040"), BigInt("14324333473156737780"), BigInt("12528216400375006511"), BigInt("11571700344192951272")]);
    expect(hexToHashOut("0xf026d29e60156a0a951a0f70cd5c7414baba079bbf1b5841fe41a741e5839e9a")).toEqual([BigInt("18321108660585209498"), BigInt("13455075202230343745"), BigInt("10743916838201881620"), BigInt("17304750195876391434")]);
    expect(hexToHashOut("0xd830fa3de83fbef5651b7dd28dad40a70e51aa85821aa06cdc67f523429fe43d")).toEqual([BigInt("15881932142735778877"), BigInt("1031793280034709612"), BigInt("7285555165475455143"), BigInt("15578226254870986485")]);
  });
  it('Hash Out Array to Hex Array', () => {
    expect(hashOutArrayToHexArray([[BigInt("7537192975943281972"), BigInt("5026903061943044921"), BigInt("17187148334317162415"), BigInt("8532114645479640460")]])).toEqual(["0x76682910a2b8cd8cee85045940ebcfaf45c325b37f704b3968997d13eeab2d34"]);
  });
  it('Hex Array to Hash Out Array', () => {
    expect(hexArrayToHashOutArray(["0x76682910a2b8cd8cee85045940ebcfaf45c325b37f704b3968997d13eeab2d34"])).toEqual([[BigInt("7537192975943281972"), BigInt("5026903061943044921"), BigInt("17187148334317162415"), BigInt("8532114645479640460")]]);
  });
  it('Poseidon Two to One Hex Hash', () => {
    expect(twoToOneHex("0x6851b1162c63f95557055ced179bd1d63d953ae4e2b742abfa81d6b952f41645", "0x384fb7715a5dc3371986545eaef2d344da454df58e77b0d6efcf2fbee29ee81e")).toBe("0x6fa9b1691862170a0941cfa8f49bdda7fc2d6dfd4cebb92acdb513af9e458fd2");
    expect(twoToOneHex("0x1224e71a46955874e978f6a7ac36cf45d153bbacf7da88e23bb692103cb2cf40", "0x94dafa8149c69efd92becd39dcacfd3b84e47911aaa484e09ed08010e8afcda0")).toBe("0x2b118d6366a28c8e3f17c6ef1d1d64fccf894cbdc687fb241333e12d6a75e745");
    expect(twoToOneHex("0xcc6e6c74def97356e9962a01fd6f60e78fd4bd6bd75348aa8be6d87671e09c8f", "0x6e6e359243a3f9f43b1e5cb4f2769451d1a80e47e3bb6d894ffe71209ed56a19")).toBe("0x958842d9302a65aa1a7c09d5aa9b13d668ad5ba55abfbb739a4a8ae7b9ef2d25");
    expect(twoToOneHex("0x5ae7b3ae30646db40422dc77f29a5d5636439f7cb34381b07ac60dfa44697b51", "0xbefa71d6f4022b61d0b0de7583896301578a805948833892fe4365d2af795099")).toBe("0x0dc4b3072df8786f7944535448a89a3773e73d8a0882f7ee5c0279904b704bd7");
    expect(twoToOneHex("0x0158c6bf5f84e6507279b35669de7bfbb454556a7c5492caf34b4a3e1db8b197", "0xeaf34b6947b2f4b952b1b2660768e0ce837512f222a864d884eda561a1f5fc1f")).toBe("0x5856ed138c7d0bff3622956f97c9f04277b1a052bb68c3c2186bd1d2e67fdf31");
    expect(twoToOneHex("0x8c69d58ecb64539aa7f673efe5a3955bc400a53477c6a8ac4ff8b51ec5be7504", "0x3568f0729ae554d6d0845a3e2707eb2d9befb3ac44dc91c177f590dda48624f8")).toBe("0xeb9618e59ae0c8fbdcba52cbae91628c44efa6b10f984adbc8d1d298fdfaf4bf");
    expect(twoToOneHex("0xda3b6ff6b87e2d95a58631748f84aa54808a2aca8d61476b609f55e044146fd0", "0x725f980e8310296e96cecaf29c842fcbbe0dc49620e0387f7e03e9d832322fa9")).toBe("0xfc36718d2f0dcf53db859ddd8b4a235e2215b6cad6b4f75f7ef25a0aadadb40b");
    expect(twoToOneHex("0xd11578558a928102bae400e0c3d0c87ccc6aea7961088d057014c4080baedce1", "0xa4bc4f21a668f8a93a5c59b240dbfb68c13afb1c8af5df0eff3260f4be86c881")).toBe("0x8792ab669f0b7170c97951b93d26872cbe789196ca2c1744d5f258f9a45718c9");
    expect(twoToOneHex("0xbf75cd6a6063e5976e4bba83b233b68228fb7fd3c4e84189660ae3c53e9f8bae", "0xa46265c67597e4bd5dfeefeb0544553fbac2721e279f680e3ebc6e2ea6df5039")).toBe("0xc41e2b82d4092872b0528dd06aa0a5dba005a8a810f0e90bf7e0bd95e7a540c9");
    expect(twoToOneHex("0xbdb9452f07cb3b2524825698a31dc83171ccdfa1fa1e0e6f1ed2e93cc6aa6b64", "0x90ae384bda9145f4d008186a3ab9b93795a7c4dd240eb50145c4dc4bd0e89197")).toBe("0x4a985d81132e4079cb68546d2d9dc970ac906809ac27f08f831c42b8aa28bf68");
    expect(twoToOneHex("0x29dab323c33f1635b67eefc14d03a530d47e9dcd674b6abd3895aaeabeee7a5c", "0x1203914ff415fd0762efcaa72fd995afd5669904d94f950eca1f58f2f9cb0bd5")).toBe("0x6d9824383352eb63d97c9fea013810f22d5233dd8b511ce94afb5c728a04cbac");
    expect(twoToOneHex("0x67dc2b5b18cb6133aba33488031743629c4c94c76452dde1ae9a29f35d0aeb04", "0x40ada4bf997c916781c8548bccb1107de5dd965fb993a5144a691135ac01f6d0")).toBe("0x70ed783adce16e4e5175a4496d2bcfdcb10b4780dcc40f6b73882a45f56495c3");
    expect(twoToOneHex("0x07a8ebcaf95490d1f8e706b6785e7eb13948e73e22c32f11547db2d9e4f84c61", "0x2861ae59c05332fad5758de991bbb79133c7d39f29c45a7e89854c6ccbf4717f")).toBe("0x364948c95686b74edae189f274e12f7ad15b38727f6e0fe6597f607ba531ed9f");
    expect(twoToOneHex("0x87036d7b801df13fb3403fcbf2d43541e494407873ca9967ab23761e24e47331", "0xa11922f91c1dda5f052d45ba404ccc5176ece13233b4ad0537bed0d6dee2fb4e")).toBe("0xbcd089b223dfaf4f1e00a6235b6be521d3c4900b23d12bdcbdbff324afae59af");
    expect(twoToOneHex("0x758953e8a4c67bf8068b22e1cc8c0de3d4d436056d1062705fac250a25e77af9", "0x37cc230d38b3226d5a674cf0c139196f1eb5e20a84eb9dc154b209c474e1e565")).toBe("0x3034adad4a908b2823184046f16bb79eec4391652ba25775b4e104c31fe0227c");
    expect(twoToOneHex("0x07667787f5dff821ee63810abd004e21c59a7c096a9c0c8ab3e91061189ee8bf", "0x869af5c7d238f893b20d0fc4198dfaa8dcb9250d179164b81d6c7b5ffa853f5a")).toBe("0x92c472955b83af41396f66480d8579f1f633ccbdfb822a79bc288166e1a85c57");
    expect(twoToOneHex("0x70f2cd9c1b25fefdc20110cf44d97f7d5aca9703f48358305744f3b24ed1930e", "0xc469303a7880d2d2b5e054ae7575bee531dd421edb4406bfd009d92d0f842a0d")).toBe("0xacbbc3f2a7ac5712791511102546e897a234e66a86dad8670ae898fdf07bb803");
    expect(twoToOneHex("0xa3fecb94145bca79e27738ff112beb68bd9ff168752db0931687088b831f4d5b", "0x7909ba63af2701d5feb83979aff29d5e007a82050d1a5c4fcee60fe917aa45bf")).toBe("0xae40e412de403e25e85e618fa0ba70cc4169b3c670a7a7518cd3d4e62788b884");
    expect(twoToOneHex("0x6ca85a7f4d92cc69718f6fe7b4084cf299b0270668f7f70ea019ed625ade6b8f", "0x4bb745a03a66a221dcdf4df625b2e507a6a1d37e5c142cf79282ac0768c0797d")).toBe("0x5ced2970a8e5e2b1b095de59d5b85c8e1661cdf1e27bb15f79bee382de845b50");
    expect(twoToOneHex("0xb1c0be3d26dae4e2da0967e93c52c78518978d82692b5a2c6c198f95df468d15", "0x18dbbed283aa956367d62a5e4f58e0f2b611ea14fac4cc194ef2f4bf5c628069")).toBe("0x20555b738da0fca4f4f517d57c7449217fb97c57a294dd942395ea2cd9f8de33");
    expect(twoToOneHex("0x4758b1fca0e4105c835192b79a504cc1bcbf2037f6c5212d1277619ebe00fee1", "0x950117a2a8a4fe1b322a6ccdc87016904061c06924f3d99128c84c5934bca3a2")).toBe("0x2767d4edd6763d42459ec5bee6a5315d6cb1cc43090812963edb1caece931108");
    expect(twoToOneHex("0x129845422dc20b1d4237cdb6394d6a7532ad41e19cd52af4ed98641929c24cd4", "0xc396111b5a952b6256b46c827439de8d5eea1b848638f2ae2cdebaa8e4bd346a")).toBe("0x471c3b2d7c8f4bbb1010da4a1cbd287d5186c8b0b19eb9708f9ad265bf042745");
    expect(twoToOneHex("0x8248f39121a3167ab2c1624dfb815b63609c24f925ec6f360b904ab706392ce0", "0x1e171f3df442d0c45d63dc3d932f007386eff1b28a1f636aa0e5f57b416b3f8e")).toBe("0x6a6ea40ad027892f299a340d581442429b4e2c3cabf9d2a6cab7262218c54a0e");
    expect(twoToOneHex("0xf98bd0b5a2edaad7336332f15dfa4588e37d6c36e09f2646247371f34a5b4952", "0x43bc3feb8a82c55c49ddb77998be3ef33b2cb3972be7b04f79a60d8c5da74d32")).toBe("0xe7677978aff0789603319defe4e7cbd458fd410aaad78d934d0be2625ff591a5");
    expect(twoToOneHex("0xb051cf4f353c44201b84ff78fca914597944ea54f37199dac45b50aab4aab683", "0x87c2e29b91c68132298c770ddfaefa9cbcec6e387ad1a3e59d23e5204b654b57")).toBe("0x94f1900fe0026086f2c6c9e690df3839ec439cca272c83137f9a494c727308ac");
    expect(twoToOneHex("0x8a279fa8db71e3050db071746fa060e5c8e62ce01c2b3fd514863f7b7c66c9e3", "0xd534e8be65899f6629366ead131105d3ac6a46c1ec80789d135dd5fb8e32a02e")).toBe("0x4b112dea6da3dd92861505efc3a9b1be16c604f7c8ae3d6fea760f1e7abab7d7");
    expect(twoToOneHex("0x2bdee41ceb8896be17f4b23286ef7e33d0d41a63a3748c74f9c66f71ea739e8a", "0x2827fc7f45f6704f3964de23792f89e927bc3e1d0c69c40d66d8688b67409bbf")).toBe("0xaab7d7bb37a191dc21b8f9b720c54acfeea64643f60209217003bf288c680ff2");
    expect(twoToOneHex("0xf952f0ed3a0b7116848814f764731e11e619bbe4a3f24b278c00251ae79bb52a", "0xaa89d706bb2307763a532fad3b28c7b1a51a2a530282e7782df753e41c2f97bb")).toBe("0xa55d8795a37e527d6dee4747dddeda9e7cf4737dde3928e072e2cc97ffd339da");
    expect(twoToOneHex("0xb037bf3c8878c641ea356d8f3fce78acd00d60923eea137fd19eb78df534aacb", "0x10796a8ca058e495940a0c7d85f02286161a07bc10c9a5cd68a155227e6a0f1c")).toBe("0x593fefec2c91da7dbca1d35d1cd1188962e146b8499961c0b746dfb1b4dc9acd");
    expect(twoToOneHex("0xcae5795bd45b77b5f29afcd4bc726656370f50006a91f84f3426ebb7580a209b", "0xe795ba372856e2b11222b2a2a88d3265557121d4132e742cb03aa7537a4a83e0")).toBe("0xcc7d39a793f4c0956506afdd4ceee2bf096afb6ccd448ad33473aed9aa5d0a15");
    expect(twoToOneHex("0x39753f01ada1145ac280c57bfe223bdcffef76378d9d7a0aa3b1ac005195dc3e", "0x4a687964a739c797ce2fe16a0c512359e23f1a2956f849aa3b05e69c713e5bfd")).toBe("0x016bfbecd0ad39f1d4e4c24a3ccc11d5341f799c9d62c588fa42c5567b5dd230");
    expect(twoToOneHex("0x1fb6f8e2ff0af07761cc8ca996068fa52576823dfec3a6104f1ab20b95a90b65", "0x228dd3f2b1bae89c20f76e2118de76ec71cff91929ca4b105ceb068e70f84a19")).toBe("0xa16f6f6e605ce8c9c9b92a000ba0d4788db5a222d01ac25ab031b5474b7ee25e");
  });
});

