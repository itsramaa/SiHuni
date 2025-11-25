import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Building2, Smartphone } from "lucide-react";

interface PaymentMethodProps {
  onSelectMethod: (method: string) => void;
  selectedMethod?: string;
}

const paymentMethods = [
  {
    id: "bank-transfer",
    name: "Transfer Bank",
    description: "Transfer ke rekening bank kami",
    icon: Building2,
    available: true,
  },
  {
    id: "credit-card",
    name: "Kartu Kredit/Debit",
    description: "Visa, Mastercard, JCB",
    icon: CreditCard,
    available: true,
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    description: "OVO, GoPay, ShopeePay",
    icon: Smartphone,
    available: true,
  },
  {
    id: "virtual-account",
    name: "Virtual Account",
    description: "Semua bank di Indonesia",
    icon: Building2,
    available: true,
  },
];

export function PaymentMethod({ onSelectMethod, selectedMethod }: PaymentMethodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pilih Metode Pembayaran</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Button
              key={method.id}
              variant={selectedMethod === method.id ? "default" : "outline"}
              className="w-full justify-start h-auto p-4"
              onClick={() => onSelectMethod(method.id)}
              disabled={!method.available}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{method.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {method.description}
                  </div>
                </div>
                {!method.available && (
                  <Badge variant="secondary" className="text-xs">
                    Segera Hadir
                  </Badge>
                )}
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}