figma.showUI(__html__);

figma.ui.onmessage = msg => {

  if (msg.type === 'change-font') {
    const selection = figma.currentPage.selection

    console.log(msg.font)
    
    // checking selection
    if (selection && selection.length <= 0) {
      figma.closePlugin('Select at least one frame')
      return
    }

    //in figma the fonts first need to be loaded. Create a promise for each font variation you need
    else {
      const promNotoReg = figma.loadFontAsync({family: "Noto Sans", style: "Regular"})
      const promNotoBold = figma.loadFontAsync({family: "Noto Sans", style: "Bold"})
      const promNotoItalic = figma.loadFontAsync({family: "Noto Sans", style: "Italic"})
      const promNotoLight = figma.loadFontAsync({family: "Noto Sans", style: "Light"})
      const promNotoSemi = figma.loadFontAsync({family: "Noto Sans", style: "SemiBold"})
      
      const promCalReg = figma.loadFontAsync({family: "Calibri", style: "Regular"})
      const promCalBold = figma.loadFontAsync({family: "Calibri", style: "Bold"})
      const promCalItalic = figma.loadFontAsync({family: "Calibri", style: "Italic"})

      const promTahReg = figma.loadFontAsync({family: "Tahoma", style: "Regular"})
      const promTahlBold = figma.loadFontAsync({family: "Tahoma", style: "Bold"})

      const promRobReg = figma.loadFontAsync({family: "Roboto", style: "Regular"})
      const promRobBold = figma.loadFontAsync({family: "Roboto", style: "Bold"})
      const promRobItalic = figma.loadFontAsync({family: "Roboto", style: "Italic"})
      const promRobLight = figma.loadFontAsync({family: "Roboto", style: "Light"})
      const promRobSemi = figma.loadFontAsync({family: "Roboto", style: "Medium"})

      const promVerReg = figma.loadFontAsync({family: "Verdana", style: "Regular"})
      const promVerBold = figma.loadFontAsync({family: "Verdana", style: "Bold"})
      const promVerItalic = figma.loadFontAsync({family: "Verdana", style: "Italic"})

      const promopenReg = figma.loadFontAsync({family: "Open Sans", style: "Regular"})
      const promopenBold = figma.loadFontAsync({family: "Open Sans", style: "Bold"})
      const promopenItalic = figma.loadFontAsync({family: "Open Sans", style: "Italic"})
      const promopenLight = figma.loadFontAsync({family: "Open Sans", style: "Light"})
      const promopenSemi = figma.loadFontAsync({family: "Open Sans", style: "SemiBold"})
      
      const prommontReg = figma.loadFontAsync({family: "Montserrat", style: "Regular"})
      const prommontBold = figma.loadFontAsync({family: "Montserrat", style: "Bold"})
      const prommontItalic = figma.loadFontAsync({family: "Montserrat", style: "Italic"})
      const prommontLight = figma.loadFontAsync({family: "Montserrat", style: "Light"})
      const prommontSemi = figma.loadFontAsync({family: "Montserrat", style: "SemiBold"})

      const prosourReg = figma.loadFontAsync({family: "Source Sans Pro", style: "Regular"})
      const prosourBold = figma.loadFontAsync({family: "Source Sans Pro", style: "Bold"})
      const prosourItalic = figma.loadFontAsync({family: "Source Sans Pro", style: "Italic"})
      const prosourLight = figma.loadFontAsync({family: "Source Sans Pro", style: "Light"})
      const prosourSemi = figma.loadFontAsync({family: "Source Sans Pro", style: "SemiBold"})

      const promNotoDReg = figma.loadFontAsync({family: "Noto Sans Display", style: "Regular"})
      const promNotoDBold = figma.loadFontAsync({family: "Noto Sans Display", style: "Bold"})
      const promNotoDItalic = figma.loadFontAsync({family: "Noto Sans Display", style: "Italic"})
      const promNotoDLight = figma.loadFontAsync({family: "Noto Sans Display", style: "Light"})
      const promNotoDSemi = figma.loadFontAsync({family: "Noto Sans Display", style: "SemiBold"})

      //load the fonts from figma
      let promises = [promNotoReg, promNotoBold, promNotoItalic, promNotoLight, promNotoSemi, 
        promCalReg, promCalBold, promCalItalic,
        promTahReg, promTahlBold, 
        promRobReg, promRobBold, promRobItalic, promRobLight, promRobSemi, 
        promVerReg, promVerBold, promVerItalic,
        promopenReg, promopenBold, promopenItalic, promopenLight, promopenSemi,
        prommontReg, prommontBold, prommontItalic, prommontLight, prommontSemi,
        prosourReg, prosourBold, prosourItalic, prosourLight, prosourSemi,
        promNotoDReg, promNotoDBold, promNotoDItalic, promNotoDLight, promNotoDSemi
      ]

      //run the swap
      Promise.all(promises).then(() => {
        swapText(selection, msg.font)
        figma.closePlugin('Fonts swapped!')
      })

      
    }

  }

  else {
    figma.closePlugin()
  }

}
//add the text styles ID of each font family you would like to switch with
var heading1 = {
  noto: "S:a6d6b9d6a232d26d4f0086064b7b3f7e0f145310,",
  calibri: "S:766a2b9f93199beb057e3109928d834f46092778,",
  tahoma: "S:68cd0804ae3230331adebf2edb749b72c3669ba8,",
  roboto: "S:fb412ff83342f5d35393fd363502c79beb0b76f6,",
  verdana: "S:6ee67201b35207ee10ae945d2c2b730e41050873,",
  opensans: "S:c981779860b759122945d9c19f510fa0a3dc25f5,",
  montserrat: "S:e268e7436568016dbaccdb9f08f7491f5fef3be0,",
  sourcesans: "S:2724ce0ea04ebcee52794258aea33eaf623b7b84,",
  notodisplay: "S:6f7e82155d23ddcc97ca44409685eadb25dde0df,"
}

var heading2Bold = {
  noto: "S:957357f04fb355c0c518f33fdfa32d4287e0e609,",
  calibri: "S:53278cc37d85f776172bf7341a5c311dd29cf20d,",
  tahoma: "S:47b91df02aa26a29710d3cf8dc5c46742eda4628,",
  roboto: "S:df9e67b2a49362609f954fdd9e22518e2a08ad55,",
  verdana: "S:3d5373bdadd2e17abfeae46be9cbae9aa63248ab,",
  opensans: "S:d3ff3f4d2d695c18bf945755a9a85e7cc4991aa5,",
  montserrat: "S:b4f802e46ff2fba98629edb3063717ed990c0ecd,",
  sourcesans: "S:40e46bd6ecd05e034f9c3376fee999eeafe19078,",
  notodisplay: "S:7731d55b3e8b8ceb5ae2b65d9b694cfa4f949065,"
}

var heading2Regular = {
  noto: "S:0161c55f7b814df852d9fa38a635a5df1b4be242,",
  calibri: "S:1200b8878ca698fcc793036e826d1014ce0a27b1,",
  tahoma: "S:dc6c1e454e7a137f4b15f664597bdda2d301cdb9,",
  roboto: "S:0e7534c6cd3c895a5c24b297af56bd1f1b1ce17c,",
  verdana: "S:b138b960f3c586fd88965b0709903cedb9d70ee9,",
  opensans: "S:ea056355a1c432769078c9e503ac1d8d01fe492c,",
  montserrat: "S:aceb0fece4bd7b1545829aa6b522c3b90dcca3e8,",
  sourcesans: "S:b3975d026d01617344c1efea84628c8f55ea3a03,",
  notodisplay: "S:9e14648e022de7e2dea39baf9441a6523458a597,"
}

var heading2Underline = {
  noto: "S:577394bcdfffedeffd2dca55e0a52983bc8af600,",
  calibri: "S:a3f85b0ac755a778ce44245181c6ca1b1e8f8a65,",
  tahoma: "S:254ed85b3e3ded3dc915342ddea5f7eb5a19aa86,",
  roboto: "S:dade210df66ce33708c58bc13e72598b3349b7b2,",
  verdana: "S:1fe8ca455bdb8afcf499eed51c86544ace50421f,",
  opensans: "S:c5ae1139eaf8cb6de889ca853dd1170a699dc9c0,",
  montserrat: "S:b2a126cd2ef38785b4e22ff56c059ee18812ef96,",
  sourcesans: "S:4c755b6979b0dd023fc855b5312d365c24754a91,",
  notodisplay: "S:57df7dcefa97af2af3a4c9916b079ff5fddedddb,"
}

var heading3 = {
  noto: "S:91d345f579c1a1a9595b2f1863447c8313894630,",
  calibri: "S:1451a0f01cead9d351fe7fa4cb83e721e42d4243,",
  tahoma: "S:7825f133056f135f20969fb9f29ad25042957345,",
  roboto: "S:34655212bad52b62e0f5dfaf495d64d6275acba5,",
  verdana: "S:9af22d955a6c4685831855557db725d0607f5bfc,",
  opensans: "S:0a9abf4a420a40724bf545196b9ae0c6e2e8826b,",
  montserrat: "S:4a12cbc6b71830a1cda0b1dfeabe3bbcebb190b9,",
  sourcesans: "S:3c011fe1f28eee9e10b141ee648b8ab4fa199f65,",
  notodisplay: "S:f9e16a0e3d574410c720c32b3f83bb97fde71c3a,"
}

var heading4 = {
  noto: "S:9d0d504cc2618803191ae5690751e77432a3d1c1,",
  calibri: "S:f81c6ef944822d9c7905f18903391b7ffca5de01,",
  tahoma: "S:30642baea265176db0cfeb79d6eaa243c7aff223,",
  roboto: "S:4ec11254f1590021e6f197bf8f7052173b74f844,",
  verdana: "S:686078ad9cbed40f0cc4f1a96ffd94a4b386c2c4,",
  opensans: "S:27fd289c7fad8c826ee6d89699fb2d165b0f8c4b,",
  montserrat: "S:dd464f062d461c30d30ae4cdc643d4773465afa8,",
  sourcesans: "S:b7d27adc7c3287d72e8c733a08c8ac8781cbc229,",
  notodisplay: "S:3cd8f3a6f01bbb930662472dbd8901c6fb5ed63c,"
}

var largeBody = {
  noto: "S:23aa2049b373d9968dbb18d23b177fbf48d05d0e,",
  calibri: "S:b69cf4256046b35246fc1c5823fdab482e329fca,",
  tahoma: "S:65df8185b3d42622d9fe66bcf1e943eb009a9d2b,",
  roboto: "S:699defb7c61b7a3b0287be8a52a2d2527cda8dd6,",
  verdana: "S:0c0cd1123fced95c65698ec6d0566fefae28dab5,",
  opensans: "S:3879037f8f40d1cda8e5cdc33cc8cf798de811c8,",
  montserrat: "S:11166b1dcc514a56612298c9f7b7d64261ebf9b8,",
  sourcesans: "S:e53387b70d935d0e83fce861882c8f59f97bfad3,",
  notodisplay: "S:39042ceb193d921984dc4723e8b30817ebed6ed2,"
}

var bodyRegular = {
  noto: "S:d8f4aa553158866542969c7f44b0e4b26db083b8,",
  calibri: "S:3466f06595e1133cddf0ec255a0b380b30d14f62,",
  tahoma: "S:9d32b734556810c8723844d746019376bd793c33,",
  roboto: "S:756b266f2c608208f36afe8f442f6536b80ee07a,",
  verdana: "S:9dd2a5f667afe24722d11bddc9255e901234a617,",
  opensans: "S:58acd77832d8924a5ae049a6528a6f76b808a1f2,",
  montserrat: "S:7bad90a9d387746552d544d5e83060483d34f950,",
  sourcesans: "S:eb84b640b47d9564ac5c2082f84f9a5400f50415,",
  notodisplay: "S:2efa39a0e45ff853ea570928e1849f0787e5a0ac,"
}

var bodyItalic = {
  noto: "S:e642e6ffafc51765d629e61bac15048738740801,",
  calibri: "S:3d066878c40a38497a7aaa3169715c9ba559a1d5,",
  tahoma: "S:53475c32467fb5d4ec46638ed4c900ac89a88e43,",
  roboto: "S:5c31ee3c62a6ab58434e9cad4210354db11dde95,",
  verdana: "S:5a0dc6792d43eb6a380ce35c09ba7c80e5a61f84,",
  opensans: "S:e82bf45ac8f3611429a518ba3118cb2da4a04031,",
  montserrat: "S:ca155c45b01465fce54b8c372ecd82cc2b95a3c0,",
  sourcesans: "S:3d57cf27122fbc3f9f587f479925293b6307032a,",
  notodisplay: "S:9d7bc3393288dfefa0a39beccae85458bad65e73,"
}

var bodyUnderline = {
  noto: "S:6c6901396631b850c63e1ca32001ac4b1e1eaa69,",
  calibri: "S:145f5cb68a0c64c19285ae6177c458d7873462df,",
  tahoma: "S:c4537ff2d2641c8107a988f35d01afb818e1636f,",
  roboto: "S:3d5a319ec3945fe9230dd16515809a8251e6c93a,",
  verdana: "S:010733de04dc8f54960e11d6b7c72b5aac83fbff,",
  opensans: "S:e799a2c91fcc486acb570b4a5f718b910c3bd1ba,",
  montserrat: "S:2e17fa5345e02c0105e6742b94346de8768d5959,",
  sourcesans: "S:a6f7c38a9be7e4bfd3d2036becbc3fb5ce5c3acf,",
  notodisplay: "S:db91eabca2a92fa54b9862746fbe46f60526c036,"
}

var bodySemiBold = {
  noto: "S:b727ffb28103f2260092e8ef7b251e387527946c,",
  calibri: "S:61aa23299677d419e2beb35fda715dfad2ca6f99,",
  tahoma: "S:4253d29e18a726f28f12d2f2243044c2e9e13fdb,",
  roboto: "S:31f8da9ca06047d009639e4339332459b0c5004b,",
  verdana: "S:1d95e6a2f23c95a32ed98599d776c38db621bddc,",
  opensans: "S:1f0a1d2701431c64a15b7fbc7ceb0447eb0c1c4a,",
  montserrat: "S:a6f1db863e84abf38c78c478adea27c4322f2a41,",
  sourcesans: "S:02f279c34f4b0c94752a69c3d425a90a83b17010,",
  notodisplay: "S:e954b98394cc8ad5c8f93ba5175d5a0123e911f4,"
}

var smallBodyRegular = {
  noto: "S:4f16a4466af3515285217f6e080331e39e85401b,",
  calibri: "S:96378ee03409acd8668154634249fc488449a7b0,",
  tahoma: "S:1e72e5b88119a60f0f31106ec4f63a18299a1159,",
  roboto: "S:b55080ac88ef0751443c1699133104dc4f0bd107,",
  verdana: "S:43cffeaaf2c965d998c18c84a111f781ffe01c08,",
  opensans: "S:77f3da0ec10da140a349fdecb8580e5b65f58d91,",
  montserrat: "S:f82b671be161f8b941f368ae4b87d842057ee3b2,",
  sourcesans: "S:a4cb1846de668a30128613cdeebd76533b5b390e,",
  notodisplay: "S:643e0c53d29c9fa0369bcb98bf515b8c1817e6da,"
}

var smallBodyLight = {
  noto: "S:accc12f6e2638686fc24f547567715d2abfe073f,",
  calibri: "S:7630ad2df0ddecc7029c15aa3057067f6e8722d6,",
  tahoma: "S:4c4adb44976b32b8bf527f17f5ef1092328dbf90,",
  roboto: "S:cd842abef978f49e01a5f1d1b4035247451f1b0a,",
  verdana: "S:d7f9968378ab56cbd2534262a58454645c7eed2c,",
  opensans: "S:d38f5800c51a39544b216ddf2f24445f59c81483,",
  montserrat: "S:91e67e817ba3e64f0953662a6392a23e7d9e8611,",
  sourcesans: "S:70c5f931580c749f0c8679fffc2a41007b06bc8b,",
  notodisplay: "S:c56ac3897b522bc3c52885962c9d1c3e36d4a515,"
}

var tinyBodyRegular = {
  noto: "S:d1a373bd5a30d047f0135e12a29fa2b58882484a,",
  calibri: "S:55bbaf71708708a44ef26995201bcde40efac5d1,",
  tahoma: "S:24a63563cd09a089927343c7d9f31f7a5b8856b4,",
  roboto: "S:37014f06aed265f6c8004ba64037446d1e234b6f,",
  verdana: "S:82d4a454ec66e4f12ce130789b0624c4388b3121,",
  opensans: "S:58f054f09f0710be295879301b20f29d2d8cc5df,",
  montserrat: "S:9874e98d1050917a18771c04a5bfe3387a2f7894,",
  sourcesans: "S:0dc6237b0f28893820ca3e53849f6a451567af7f,",
  notodisplay: "S:6508e40bd94aa1355da59e2243faa82c30456d15,"
}

var tinyBodyItalic = {
  noto: "S:7e0aa372b2703cfff805d65452403788def24179,",
  calibri: "S:0d5ac3a7f97e20d9be22a5ed12e08e968e5bb852,",
  tahoma: "S:a966dfb3e708def1d427d8b0b12841161a60a9ff,",
  roboto: "S:4cb265e836db345251971b889e7e0e263bcc6b2c,",
  verdana: "S:d9aea1b574cf92bc19e51d9b0d792d449e05b403,",
  opensans: "S:43636374ab5eed510025b2cbfdf83d4ca637c640,",
  montserrat: "S:891b66fcb4f574c26ae6c73bbf55542c7175fa7f,",
  sourcesans: "S:babbe8917d384ba7c7506c5422988d101dbee0ee,",
  notodisplay: "S:113f2bd60c3e96d426afcdda747c4e261c5fd4f9,"
}

function swapText(selection, lang) {
  
  console.log(selection)
  for (let layer of selection) {
    
    //if its a group or frame, dig deeper
    if (layer.children != undefined) {
      swapText(layer.children, lang)
    }
    else {
      
      //only run if its on a text layer
      if (layer.type == "TEXT") {
        
        //check the style ID currently there to map the right text style (e.g. heading1 noto -> heading1 tahoma)
        switch (layer.textStyleId) {
          
          case heading1.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading1[lang])
            break
          
          case heading2Bold.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading2Bold[lang])
            break

          case heading2Bold.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading2Bold[lang])
            break  

          case heading2Regular.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading2Regular[lang])
            break  

          case heading2Underline.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading2Underline[lang])
            break  

          case heading3.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading3[lang])
            break  

          case heading4.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, heading4[lang])
            break  

          case largeBody.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, largeBody[lang])
            break  

          case bodyItalic.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, bodyItalic[lang])
            break  

          case bodyRegular.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, bodyRegular[lang])
            break  

          case bodySemiBold.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, bodySemiBold[lang])
            break  

          case bodyUnderline.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, bodyUnderline[lang])
            break  

          case smallBodyLight.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, smallBodyLight[lang])
            break  

          case smallBodyRegular.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, smallBodyRegular[lang])
            break  

          case tinyBodyItalic.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, tinyBodyItalic[lang])
            break  

          case tinyBodyRegular.noto:
            layer.setRangeTextStyleId(0, layer.characters.length, tinyBodyRegular[lang])
            break  

        }
      }
    }
  }
}




