'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function NavigationButtons() {
  useEffect(() => {
    // Smooth scroll function
    const smoothScroll = (e, target) => {
      e.preventDefault()
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.nav-button')
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => 
        smoothScroll(e, button.getAttribute('href') || ''))
    })

    // Cleanup
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', (e) => 
          smoothScroll(e, button.getAttribute('href') || ''))
      })
    };
  }, [])

  return (
    <div className="flex flex-col w-full px-4 sm:px-0 sm:flex-row sm:w-auto">
      <div className="grid grid-cols-1 gap-2 w-full sm:flex sm:space-x-4">
        <Button
          href="#about"
          className="nav-button w-full text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
          Sobre Nosotros
        </Button>
        <Button
          href="#contact"
          className="nav-button w-full text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
          Contactanos
        </Button>
        <Button
          href="#products"
          className="nav-button w-full text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
          Productos
        </Button>
      </div>
    </div>
  );
}
