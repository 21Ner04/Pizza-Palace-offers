"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, Popover } from "@headlessui/react"
import { useState } from "react"
import clsx from "clsx"
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  ArrowRightCircleIcon,
  RocketLaunchIcon,
  MapPinIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid"

import LogoSection from "@/components/header/header-nav/logo-section"

export default function Header() {
  const pathName = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <noscript><div><img src="https://mc.yandex.ru/watch/95785139" className="absolute top-[-9999px] w-[1px] h-[1px]" alt="ym" /></div></noscript>
      <nav className="header__nav" aria-label="Global">
        <LogoSection onClick={() => setMobileMenuOpen(false)} />
        <button
          type="button"
          className="header__nav__burger-button on-hover on-tap"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Открыть главное меню</span>
          <Bars3Icon
            width={24}
            height={24}
            className="svg-icon"
            aria-hidden="true"
          />
        </button>

        <Popover.Group className="header__nav__desktop-menu">
          <Link
            href="/"
            className={clsx("on-hover on-tap", {
              "current-path": pathName === "/",
            })}
          >
            Главная<span className="sr-only">страница сайта пиццерии PizzaPalace</span>
          </Link>
          <Link
            href="/promo"
            className={clsx("on-hover on-tap sr-only", {
              "current-path": pathName === "/promo",
            })}
          >
            Акции<span className="sr-only">и скидки в пиццерии PizzaPalace</span>
          </Link>
          <Link
            href="/contacts"
            className={clsx("on-hover on-tap", {
              "current-path": pathName === "/contacts",
            })}
          >
            Контакты<span className="sr-only">пиццерии PizzaPalace</span>
          </Link>
          <Link
            href="/work"
            className={clsx("on-hover on-tap sr-only", {
              "current-path": pathName === "/work",
            })}
          >
            Работа в PizzaPalace
          </Link>
          <Link
            href="/about"
            className={clsx("on-hover on-tap sr-only", {
              "current-path": pathName === "/about",
            })}
          >
            О нас<span className="sr-only">Информация о пиццерии PizzaPalace</span>
          </Link>
        </Popover.Group>
        <div className="header__nav__desktop-menu">
          <Link href="/login" className="login-section sr-only on-hover on-tap">
            Войти <span aria-hidden="true">&rarr;</span>
          </Link>
          <a href="tel:+7 (999) 123-45-67" className="login-section on-hover on-tap">
            <PhoneIcon
              width={24}
              height={24}
              className="svg-icon"
              aria-hidden="true"
            />
            {`+7 (999) 123-45-67`}
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="header__mobile-menu"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" aria-hidden="true" />
        <Dialog.Panel className="header__mobile-menu__panel">
          <div className="header__mobile-menu__panel__header">
            <LogoSection onClick={() => setMobileMenuOpen(false)} />
            <button
              type="button"
              className="header__nav__button-close on-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Закрыть главное меню</span>
              <XMarkIcon width={24} height={24} className="svg-icon" aria-hidden="true" />
            </button>
          </div>
          <div className="header__mobile-menu__panel__links">
            <a href="tel:+79993220033" className="link on-hover on-tap">
              <PhoneIcon className="link__icon" aria-hidden="true" />
              <span className="clipped-text">{`+7 (999) 123-45-67`}</span>
            </a>
            <Link href="/" className="link on-hover on-tap">
              <ArrowRightCircleIcon className="link__icon" aria-hidden="true" />
              <span className="block">Главная</span>
            </Link>
            <Link href="login" className="sr-only link on-hover on-tap">
              <ArrowRightCircleIcon className="link__icon" aria-hidden="true" />
              <span className="block">Войти</span>
            </Link>
            <Link href="promo" className="link on-hover on-tap sr-only">
              <RocketLaunchIcon className="link__icon" aria-hidden="true" />
              <span className="block">Акции</span>
            </Link>
            <Link href="contacts" className="link on-hover on-tap">
              <MapPinIcon className="link__icon" aria-hidden="true" />
              <span className="block">Контакты</span>
            </Link>
            <Link href="work" className="link on-hover on-tap sr-only">
              <UserGroupIcon className="link__icon" aria-hidden="true" />
              <span className="block">Работа в Pizza Palace</span>
            </Link>
            <Link href="about" className="link on-hover on-tap sr-only">
              <MoonIcon className="link__icon" aria-hidden="true" />
              <span className="block">О нас</span>
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
