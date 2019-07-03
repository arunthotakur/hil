export class DrugLocation {
  retailerId: number;
  drugs: DrugInfo[];
}

export class DrugInfo {
  drugId: number;
  discount: number;
}

export class Drug {
  drugId: number;
  drugName: string;
  description: string;
  forms: DrugForm[];
}

export class DrugForm {
  type: string;
  quantity: string;
  unit: number;
  strength: string;
  price: number;
}
