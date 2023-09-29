import './chartbox.scss';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import animalStore from '../../stores/animalStore';
import Container from 'react-bootstrap/Container';

const ChartBox = () => {
  const store = animalStore();

  const [males, setMales] = useState([]);
  const [females, setFemales] = useState([]);
  useEffect(() => {
    store.getAnimals();
  }, [store.animals]);
  const animals = store.animals || [];
  useEffect(() => {
    const maleAnimals = animals.filter((item) => item.sex === 'Male');
    setMales(maleAnimals);
  }, [store.animals]);
  useEffect(() => {
    const femaleAnimals = animals.filter((item) => item.sex === 'Female');
    setFemales(femaleAnimals);
  }, [store.animals]);

  const data01 = [
    { name: 'Males', value: males.length },
    { name: 'Females', value: females.length },
  ];
  const COLORS = ['rgb(20, 66, 56)', '#00C49F'];

  return (
    <Container className="chartBox" style={{ textAlign: 'center' }}>
      <div className="boxInfo">
        <h3 className="font2">Total Animals</h3>
        <h1 className="number">{animals.length}</h1>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data01}
                innerRadius={30}
                outerRadius={50}
                paddingAngle={5}
                dataKey="value"
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 30, y: 125 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  );
};

export default ChartBox;
