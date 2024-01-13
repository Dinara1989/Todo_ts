import React from 'react';

type ComponentType = {
    students: Array<StudentType>
    // students: StudentType[] //інший варіант написання
}
type StudentType = {
    id: number
    name: string
    age: number
}
const Component = (props:ComponentType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    type CarsType = {
        manufacturer: string
        model: string
    }
    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArray, index)=>{
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name} </span>
                            <span>- {objectFromStudentArray.age} years old</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                {/*{topCars.map((objectFromTopCarsArray: CarsType, index: number) => {*/}
                {/*    return (*/}
                {/*        <tr key={index}>*/}
                {/*            <th>{objectFromTopCarsArray.manufacturer}</th>*/}
                {/*            <th>{objectFromTopCarsArray.model}</th>*/}
                {/*        </tr>*/}
                {/*    )*/}
                {/*})}*/}

                //Optimized
                {topCars.map(({manufacturer, model}: CarsType, index) => (
                    <tr key={manufacturer + model}>
                        <th>{manufacturer}</th>
                        <th>{model}</th>
                    </tr>
                ))}
            </table>

        </div>
    );
};

export default Component;