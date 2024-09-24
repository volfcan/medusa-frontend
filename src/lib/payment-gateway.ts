import { PaymentProcessor } from "@medusajs/medusa"
import { PayTRPaymentGateway } from "./paytr-payment-gateway"

class PayTRPaymentProcessor extends PaymentProcessor {
  private paytrPaymentGateway: PayTRPaymentGateway

  constructor() {
    super()
    this.paytrPaymentGateway = new PayTRPaymentGateway()
  }

  async createPayment(paymentData: any): Promise<any> {
    const paymentResponse = await this.paytrPaymentGateway.createPayment(
      paymentData
    )
    return paymentResponse
  }

  async retrievePayment(paymentId: string): Promise<any> {
    const paymentResponse = await this.paytrPaymentGateway.retrievePayment(
      paymentId
    )
    return paymentResponse
  }

  async updatePayment(paymentId: string, paymentData: any): Promise<any> {
    const paymentResponse = await this.paytrPaymentGateway.updatePayment(
      paymentId,
      paymentData
    )
    return paymentResponse
  }

  async deletePayment(paymentId: string): Promise<any> {
    const paymentResponse = await this.paytrPaymentGateway.deletePayment(
      paymentId
    )
    return paymentResponse
  }
}

export default PayTRPaymentProcessor
