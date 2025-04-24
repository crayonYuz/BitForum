"use client"

import { useState } from "react"

const tabs = ["홈", "인기", "랭킹", "뉴스"]

export const TopTabs = () => {
  const [selected, setSelected] = useState("홈")

  return (
    <div className="flex gap-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`text-sm font-medium ${selected === tab ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}