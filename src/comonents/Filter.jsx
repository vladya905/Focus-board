const Filter = ({value, onChange}) => (
    <label className='flex justify-center  mb-10 outline-1  w-[100%] pt-3 pb-3 rounded shadow' >
        🔍️
    <input className='input' type='text' value={value} onChange={onChange}/>
    </label>)

export default Filter