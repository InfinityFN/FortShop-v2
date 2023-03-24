function getShopJSON(featured1, featured2, daily1, daily2, daily3, daily4, daily5, daily6, date) {
    var json = {
        refreshIntervalHrs: 24,
        dailyPurchaseHrs: 24,
        expiration: date /*'9999-12-31T23:59:59.999Z'*/,
        storefronts: [
            {
                name: 'BRDailyStorefront',
                catalogEntries: [
                    {
                        devName: daily1.id,
                        offerId: 'v2:/7f16a118-fc18-4d8d-9712-34185db5d177',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 9999,
                                finalPrice: daily1.price,
                                saleExpiration: date,
                                basePrice: 9999
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: daily1.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: daily1.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: 0,
                        catalogGroupPriority: 0
                    },
                    {
                        devName: daily2.id,
                        offerId: 'v2:/d8f6e33e-d693-4692-ba53-3474462a43ff',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: daily2.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: daily2.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: daily2.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: 0,
                        catalogGroupPriority: 0
                    },
                    {
                        devName: daily3.id,
                        offerId: 'v2:/1dfad32f-d304-4e12-9bd0-d25f378c7ca6',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: daily3.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: daily3.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: daily3.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: 0,
                        catalogGroupPriority: 0
                    },
                    {
                        devName: daily4.id,
                        offerId: 'v2:/d1261947-d187-48d5-872f-cbfd14289d7c',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: daily4.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: daily4.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: daily4.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: 0,
                        catalogGroupPriority: 0
                    },
                    {
                        devName: daily5.id,
                        offerId: 'v2:/960bb92e-2542-4a60-9c66-494abd59f67a',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: daily5.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: daily5.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: daily5.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: 0,
                        catalogGroupPriority: 0
                    },
                    {
                        devName: daily6.id,
                        offerId: 'v2:/af2e8b11-f1d9-42ab-a063-4c281d2d3adc',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: daily6.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: daily6.price,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: daily6.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: 0,
                        catalogGroupPriority: 0
                    }
                ]
            },
            {
                name: 'BRWeeklyStorefront',
                catalogEntries: [
                    {
                        devName: featured2.id,
                        offerId: 'v2:/32fb86e1-4a02-4478-935d-47f3fe333e7f',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: featured2.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: featured2.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: featured2.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: -1,
                        catalogGroupPriority: 0
                    },
                    {
                        devName: featured1.id,
                        offerId: 'v2:/dfe83374-0131-4180-8771-30cb7ff04953',
                        fulfillmentIds: [],
                        dailyLimit: -1,
                        weeklyLimit: -1,
                        monthlyLimit: -1,
                        categories: [],
                        prices: [
                            {
                                currencyType: 'MtxCurrency',
                                currencySubType: '',
                                regularPrice: 0,
                                finalPrice: featured1.price,
                                saleExpiration: date,
                                basePrice: 0
                            }
                        ],
                        matchFilter: '',
                        filterWeight: 0,
                        appStoreId: [],
                        requirements: [
                            {
                                requirementType: 'DenyOnItemOwnership',
                                requiredId: featured1.id,
                                minQuantity: 1
                            }
                        ],
                        offerType: 'StaticPrice',
                        giftInfo: {
                            bIsEnabled: true,
                            forcedGiftBoxTemplateId: '',
                            purchaseRequirements: [],
                            giftRecordIds: []
                        },
                        refundable: true,
                        metaInfo: [],
                        displayAssetPath: '',
                        itemGrants: [
                            {
                                templateId: featured1.id,
                                quantity: 1
                            }
                        ],
                        sortPriority: -2,
                        catalogGroupPriority: 0
                    }
                ]
            }
        ]
    }

    return json;
}

module.exports = {
    getShopJSON
}