"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Lock, AlertCircle } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
}

export function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    // Simulate Tripay API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    onSuccess();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-6 h-6" />
          Bayar dengan Tripay
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Nomor Kartu</Label>
          <Input
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').slice(0, 19))}
            maxLength={19}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Kadaluarsa</Label>
            <Input
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value.slice(0, 5))}
              maxLength={5}
            />
          </div>
          <div>
            <Label>CVV</Label>
            <Input
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.slice(0, 4))}
              maxLength={4}
              type="password"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Lock className="w-4 h-4" />
          Aman dengan enkripsi Tripay
        </div>
        <Button onClick={handlePay} className="w-full h-12 text-lg" disabled={loading || !cardNumber || !expiry || !cvv}>
          {loading ? 'Memproses...' : `Bayar Rp ${amount.toLocaleString('id-ID')}`}
        </Button>
      </CardContent>
    </Card>
  );
}
