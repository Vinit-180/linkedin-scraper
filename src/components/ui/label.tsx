
'use client';

import * as React from 'react';

// const labelVariants = cva(
//   'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
// );

// const Label = React.Fragment<>(({ className, ...props }, ref) => {
// //   <LabelPrimitive.Root
//         return (<label
//     ref={ref}
//     htmlFor=''
//     className={cn(labelVariants(), className)}
//     {...props}
//   >

//   </label>)
// };
// Label.displayName = LabelPrimitive.Root.displayName;

interface LabelProps{
    name:string;
    value:string;
    externalClass?:string;
}
const Label:React.FC<LabelProps>=({name,value,externalClass})=>{
    return <> <label htmlFor={name} className={`${externalClass} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}> {value}</label>
    </>
}

export default Label;
