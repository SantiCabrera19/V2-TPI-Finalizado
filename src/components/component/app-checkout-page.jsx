'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { ArrowLeft, X } from 'lucide-react'

export function BlockPage() {
  const router = useRouter()
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    const cartTotal = localStorage.getItem('cartTotal')
    if (cartTotal) {
      setTotal(parseFloat(cartTotal))
    } else {
      router.push('/cart')
    }
  }, [router])

  const handleCancel = () => {
    const confirm = window.confirm('¿Estás seguro que deseas cancelar el pago?')
    if (confirm) {
      localStorage.removeItem('cartTotal')
      router.push('/cart')
    }
  }

  const handleGoBack = () => {
    router.push('/')
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    address: '',
    country: '',
    province: '',
    phoneNumber: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('Procesando pago:', { ...formData, total })
      
      localStorage.removeItem('cartTotal')
      
      router.push('/confirmation')
    } catch (error) {
      console.error('Error al procesar el pago:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#abff99] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={handleGoBack}
            variant="ghost"
            className="flex items-center text-white hover:bg-green-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
          <Button
            onClick={handleCancel}
            variant="ghost"
            className="flex items-center text-white hover:bg-red-500 transition-colors">
            <X className="mr-2 h-4 w-4" />
            Cancelar pago
          </Button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
          Finalizar Compra
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
            Resumen de la Orden
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-base sm:text-lg font-medium">Total a Pagar:</span>
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required />
            </div>
            <div>
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required />
            </div>
            <div>
              <Label htmlFor="cardNumber">Número de Tarjeta</Label>
              <Input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cardExpiry">Fecha de Expiración</Label>
                <Input
                  type="text"
                  id="cardExpiry"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/AA" />
              </div>
              <div>
                <Label htmlFor="cardCVC">CVC</Label>
                <Input
                  type="text"
                  id="cardCVC"
                  name="cardCVC"
                  value={formData.cardCVC}
                  onChange={handleInputChange}
                  required
                  placeholder="123" />
              </div>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Dirección</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required />
            </div>
            <div>
              <Label htmlFor="country">País</Label>
              <Select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required>
                <option value="">Selecciona un país</option>
                <option value="AR">Argentina</option>
                <option value="CL">Chile</option>
                <option value="CO">Colombia</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
                <option value="ES">España</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="province">Provincia</Label>
              <Input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                required />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="phoneNumber">Número de Teléfono</Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-4 rounded">
              Cancelar
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-1/2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 rounded">
              Confirmar Pago
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}