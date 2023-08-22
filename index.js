console.log('Loaded index.js!');

/**
 * SDK V1
 */

const legacyEvents = ['pageBeforeInit', 'modalBeforeInit', 'inited', 'loaded', 'basketCompleted', 'modalClosed'];

function openLegacy() {
  console.log('Open legacy!');
  const swf = new SmartWithFood({
    token: 'V1-TOKEN',
    language: 'nl',
    recipes: [
      {
        name: 'Vol-au-vent met frietjes',
        language: 'nl',
        imageUrl: 'https://fgdjrynm.filerobot.com/acc/recipes/f1f86a6f6b0dbe5aa2b6b03a77e023eda90df75e3718e857399f7083c8d32cb3.jpg',
        yieldAmount: 4,
        ingredients: [
          '5 dl kippenbouillon',
          '250 g champignons',
          '1 zak frieten',
          '300 g gemengd gehakt',
          '4 takjes platte peterselie',
          'nootmuskaat',
          'peper',
          'zout',
          '1 kip',
          '2 el bloem',
          '1 eidooier',
          '1 dl room',
          '2 el boter',
          '4 bladerdeegkoekjes',
          '2 el paneermeel',
        ]
      }
    ],
    viewSchemeConfig: {
      baseColor: '#FF7D50',
      footerBaseColor: '#C2E4CB',
      primaryButtonCornerRadius: 9999,
    }
  });

  legacyEvents.forEach((eventName) => {
    swf.on(eventName, (...args) => {
      console.log(`Legacy events ${eventName}`, args);
    });
  })

  swf.renderModal();
}

/**
 * SDK V2
 */

window.Recipe2Basket.initialize({
  token: 'V2-TOKEN',
  language: 'nl',
});

window.Recipe2Basket.renderButtons({
  selectorOrElement: '#r2b-button-container',
  recipes: [
    {
      name: 'Vol-au-vent met frietjes',
      language: 'nl',
      media: 'https://fgdjrynm.filerobot.com/acc/recipes/f1f86a6f6b0dbe5aa2b6b03a77e023eda90df75e3718e857399f7083c8d32cb3.jpg',
      yield: 4,
      ingredients: [
        '5 dl kippenbouillon',
        '250 g champignons',
        '500 g frieten',
        '300 g gemengd gehakt',
        '4 takjes platte peterselie',
        'nootmuskaat',
        'peper',
        'zout',
        '1 kip',
        '2 el bloem',
        '1 eidooier',
        '1 dl room',
        '2 el boter',
        '4 bladerdeegkoekjes',
        '2 el paneermeel',
      ]
    }
  ]
});
