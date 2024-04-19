interface CheckBoxProps {
  checkboxid: string
  period: string
  openinghours: string
}

export function CheckBox({ checkboxid, period, openinghours }: CheckBoxProps) {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={checkboxid}
          className="rounded-full focus:right-0 text-yellow-400 focus:ring-white"
        />
        <label htmlFor={checkboxid} className="ml-2">
          {period}
        </label>
      </div>
      <span>{openinghours}</span>
    </div>
  )
}
