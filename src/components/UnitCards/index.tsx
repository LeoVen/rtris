import data from '../../data/units.json';
import { Unit } from '../../models/Unit';
import Marble from '../Marble';
import UnitStatsSection from '../UnitStats';
import { UnitTitle } from '../UnitTitle';
import { MainContainer, UnitCard, UnitPortrait } from './components';

function UnitCards() {
    return (
        <MainContainer>
            {data.map((unit: Unit, i: number) => {
                return (
                    <Marble key={i}>
                        <UnitCard>
                            <UnitTitle title={unit.text.name} />
                            <div style={{ display: 'flex' }}>
                                <UnitPortrait src="./assets/portraits/placeholder.png" />
                                <p>{unit.text.descr_short}</p>
                            </div>
                            <UnitStatsSection {...unit.descr.stats} />
                        </UnitCard>
                    </Marble>
                )
            })
            }
        </MainContainer>
    )
}

export default UnitCards;
