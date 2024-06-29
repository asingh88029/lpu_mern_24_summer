import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import AdventureCard from '../components/Adventure/AdventureCard'
import "./Adventure.css"
import {Select} from "antd"

const Adventure = () => {

  const {id} = useParams()

  const [adventureData, setAdventureData] = useState([])

  const [categories, setCategories] = useState([])

  const [durations, setDurations] = useState([])

  const [budgets, setBudgets] = useState([])

  const getUniqueCategories = (arr) => {
    const categories = arr.map(item => item.category);
    return [...new Set(categories)];
  };

  const getDurationIntervals = (arr) => {
    // [{},{},{}]
    const durations = arr.map(item=>item.duration)
    // [6, 8, 27, 9, 17]
    const ranges = durations.map((item)=>{
      const rem = item % 5
      const lowerRange = item - rem
      const higherRange = lowerRange + 5
      return `${lowerRange}-${higherRange}`
    })
    const newRanges = [...new Set(ranges)]
    return newRanges.sort((curr, next)=>{
      const a = parseInt(curr.split("-")[0])
      const b = parseInt(next.split("-")[0])
      return a > b ? 1 : -1
    })
  };

  const getBudgetIntervals = (arr) => {
    // [{},{},{}]
    const budgets = arr.map(item=>item.costPerHead)
    // [6, 8, 27, 9, 17]
    const ranges = budgets.map((item)=>{
      const rem = item % 2000
      const lowerRange = item - rem
      const higherRange = lowerRange + 2000
      return `${lowerRange}-${higherRange}`
    })
    const newRanges = [...new Set(ranges)]
    return newRanges.sort((curr, next)=>{
      const a = parseInt(curr.split("-")[0])
      const b = parseInt(next.split("-")[0])
      return a > b ? 1 : -1
    })
  };
  

  useEffect(()=>{
    const API_ENDPOINT = `https://makemytrip-backend-w2d2.onrender.com/adventures?city=${id}`
    fetch(API_ENDPOINT).then(res=>res.json()).then((data)=>{
      setAdventureData(data)
      // to update the categories
      const uniquCategories = getUniqueCategories(data)
      setCategories(uniquCategories)
      // to update the durations
      const uniqueIntervals = getDurationIntervals(data)
      setDurations(uniqueIntervals)
      // to update the budgets
      const uniqueBudgets =  getBudgetIntervals(data)
      setBudgets(uniqueBudgets)
    })
  },[])

  return (
    <div>
      <div id='filter-section'>
        <div>
          <h1>Apply Filters and Save Your Time !</h1>
        </div>
        <div>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '20%' }}
            placeholder="Select Category"
            defaultValue={[]}
            onChange={()=>{}}
            options={categories.map((item)=>{ 
              return {"label" : item, "value" : item}
            })}
          />
          <Select
            mode="multiple"
            allowClear
            style={{ width: '20%' }}
            placeholder="Select Budget"
            defaultValue={[]}
            onChange={()=>{}}
            options={budgets.map((item)=>{ 
              return {"label" : item + " INR", "value" : item}
            })}
          />
          <Select
            mode="multiple"
            allowClear
            style={{ width: '20%' }}
            placeholder="Select Duration"
            defaultValue={[]}
            onChange={()=>{}}
            options={durations.map((item)=>{ 
              return {"label" : item + " Hrs", "value" : item}
            })}
          />
        </div>
      </div>
      <div id='adventure-card-container'>
        {adventureData.map((info)=>{
          const {id, name, costPerHead, currency, image, duration, category} = info;
          return <AdventureCard id={id} name={name} costPerHead={costPerHead} currency={currency} image={image} duration={duration} category={category} />
        })}
      </div>
    </div>
  )
}

export default Adventure