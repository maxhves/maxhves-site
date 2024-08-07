import React from 'react'
import {clsx} from "clsx";

//region Entry

export default function ExpertiseCard({children}: { children: React.ReactNode }) {
  return (
    <li className="flex-1">
      {children}
    </li>
  )
}

//endregion

//region Container

export function ExpertiseCardHeader({children}: { children: React.ReactNode }) {
  return (
    <div className="pb-4">
      {children}
    </div>
  )
}

export function ExpertiseCardBody({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-3">
      {children}
    </div>
  )
}

//endregion

//region Icon

export function ExpertiseCardIcon({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx(className, "flex size-10 items-center justify-center rounded-lg bg-stone-700")}>
      {children}
    </div>
  )
}

//endregion

//region Title

export function ExpertiseCardTitle({children}: { children: React.ReactNode }) {
  return (
    <div className="text-stone-900 text-sm font-semibold">
      {children}
    </div>
  )
}

//endregion

//region Description

export function ExpertiseCardDescriptionList({children}: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3">
      {children}
    </ul>
  )
}

export function ExpertiseCardDescriptionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-xs font-normal text-stone-700">
      {children}
    </li>
  )
}

//endregion