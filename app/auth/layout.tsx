import React from "react"

export default function ({ children }: {
    children: React.ReactNode
}) {
    return <div>
         <div className="border-b text-center p-1">
        Some banner for all pages starting with signup 
    </div>
    {children}
    </div>
}