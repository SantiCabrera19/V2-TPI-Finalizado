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
    <div className="flex space-x-4">
      <Button
        href="#about"
        className="nav-button px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        Sobre Nosotros
      </Button>
      <Button
        href="#contact"
        className="nav-button px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        Contactanos
      </Button>
      <Button
        href="#products"
        className="nav-button px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        Productos
      </Button>
    </div>
  );
}
