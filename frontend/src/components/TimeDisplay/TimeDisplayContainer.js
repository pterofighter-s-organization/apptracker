
export default function TimeDisplayContainer ( {tag: Tag, timeDue, timeDiff} ) {

    // return { daysLeft, hoursLeft, yearsLeft, monthsLeft, totalMonthsLeft }
    const timeDisplay = (() => {
        const monthsLeft = timeDiff.totalMonthsLeft
        const daysLeft = timeDiff.daysLeft
        const hoursLeft = timeDiff.hoursLeft

        if (monthsLeft > 1){
            return monthsLeft + " " + "months left"
        } if (daysLeft > 1){
            return daysLeft + " " + "days left"
        } if (hoursLeft >= 1){
            return hoursLeft + " " + "hours left"
        }
        return "Do Now"
    })

    return (
        <>
            <Tag>
                {timeDue}
            </Tag>
            <Tag>
                {timeDisplay()}
            </Tag>
        </>
    )
}