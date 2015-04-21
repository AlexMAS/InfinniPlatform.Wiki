---
layout: default
title: VirtualProductPack
position: 2
categories: 
tags: 
---

Virtual Medicinal Product Pack (VMPP) - описание упаковки виртуального лекарственного средства. Абстрактное понятие, которое описывает общие свойства упаковки виртуального лекарственного средства. Иначе говоря, это описание упаковки generic-продукта, которое не имеет информации о поставщике или торговой марке. Например, "Atenolol 100mg tablets x 28 tablet", "Generic Estracombi TTS transdermal patches x 8 patches", "Fluorouracil 5% cream x 20g".

 

```
{
	"Type": "Object",
	"Caption": "Virtual Medicinal Product Pack (VMPP)",
	"Description": "Упаковка виртуального лекарственного средства",
	"Properties": {
		"Id": {
			"Type": "String",
			"Caption": "Identifier",
			"Description": "Идентификатор упаковки виртуального лекарственного средства (VPPID)"
		},
		"Name": {
			"Type": "String",
			"Caption": "Name",
			"Description": "Наименование упаковки виртуального лекарственного средства (NM)"
		},
		"NameShort": {
			"Type": "String",
			"Caption": "Abbreviated name",
			"Description": "Краткое наименование упаковки виртуального лекарственного средства (ABBREVNM)"
		},
 		"VirtualProductId": {
			"Type": "Object",
			"Caption": "Virtual medicinal product",
			"Description": "Виртуальное лекарственное средство (VPID)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "VirtualProduct",
					"Inline": false
				}
			}
		},
 		"CombinationId": {
			"Type": "Object",
			"Caption": "Combination pack",
			"Description": "Типа комбинирования упаковки виртуального лекарственного средства (COMBPACKCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ProductPackCombinationLoockup",
					"Inline": false
				}
			}
		},
 		"Quantity": {
			"Type": "Float",
			"Caption": "Quantity",
			"Description": "Количество лекарственных средств в упаковке виртуального лекарственного средства (QTYVAL)"
		},
 		"QuantityUnitId": {
			"Type": "Object",
			"Caption": "Quantity unit",
			"Description": "Единица измерения лекарственных средств в упаковке виртуального лекарственного средства (QTY_UOMCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "UnitOfMeasureLoockup",
					"Inline": false
				}
			}
		},
		"Tariff": {
			"Type": "Object",
			"Caption": "Drug Tariff Category Information",
			"Description": "Категория тарификации и цена упаковки виртуального лекарственного средства (VIRTUAL_MED_PRODUCT_PACK.DRUG_TARIFF_INFO)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "VirtualProductPackTariff",
					"Inline": true
				}
			}
		},
		"ParentPack": {
			"Type": "Object",
			"Caption": "Parent pack",
			"Description": "Контейнер упаковки виртуального лекарственного средства (VIRTUAL_MED_PRODUCT_PACK.COMB_CONTENT)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "VirtualProductPack",
					"Inline": false
				}
			}
		},
		"ChildPacks": {
			"Type": "Array",
			"Caption": "Child packs",
			"Description": "Содержимое упаковки виртуального лекарственного средства (VIRTUAL_MED_PRODUCT_PACK.COMB_CONTENT)",
			"Items": {
				"Type": "Object",
				"TypeInfo": {
					"DocumentLink": {
						"ConfigId": "Dmd",
						"DocumentId": "VirtualProductPack",
						"Inline": false
					}
				}
			}
		},
		"ActualPacks": {
			"Type": "Array",
			"Caption": "Actual Medicinal Product Pack",
			"Description": "Упаковки существующего лекарственного средства соответствующие упаковке виртуального лекарственного средства (ACTUAL_MEDICINAL_PROD_PACKS.AMPPS)",
			"Items": {
				"Type": "Object",
				"TypeInfo": {
					"DocumentLink": {
						"ConfigId": "Dmd",
						"DocumentId": "ActualProduct",
						"Inline": false
					}
				}
			}
		},
		"IsInvalid": {
			"Type": "Bool",
			"Caption": "Invalidity flag",
			"Description": "Запись об упаковке виртуального лекарственного средства является недействительной (INVALID)"
		}
	}
}
```

 

 

