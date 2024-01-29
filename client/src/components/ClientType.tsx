import { testCenterClients } from '../data/Data'
import useSelectClient from '../hooks/useSelectClient'
import RadioButton from './UI/radio'
import '../styles/components/clientType.styling.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SelectClientType: React.FC = (): JSX.Element => {
	const { selectClient, handleClientTypeChange } = useSelectClient()
	return (
		<section className="container">
			<h4 id="testCenter">Client:</h4>
			<label className="radioButton">
				<RadioButton
					name="testCenterType"
					value="single"
					label="Single"
					checked={selectClient === 'single'}
					onChange={handleClientTypeChange}
				/>
				<RadioButton
					name="testCenterType"
					value="multiple"
					label="Multiple"
					checked={selectClient === 'multiple'}
					onChange={handleClientTypeChange}
				/>
			</label>
			{selectClient === 'single' ? (
				<div className="testCenterSelection">
					<label>
						<h4 className="centerHeader">Testing Center 1:</h4>
						<select defaultValue="select-test-Center">
							<option value="select-test-Center" disabled>
								Select Client
							</option>
							{testCenterClients.map((testCenter) => (
								<option key={testCenter.id} value={testCenter.id}>
									{testCenter.client}
								</option>
							))}
						</select>
						<FontAwesomeIcon
							icon={faClock}
							size="lg"
							className="clockIcon"
							style={{ position: 'relative', left: '10px', bottom: '.5px' }}
						/>
					</label>
				</div>
			) : (
				<div className="testCenterSelection">
					{[1, 2, 3, 4].map((centersNumber) => (
						<label key={centersNumber}>
							<h4 className="centerHeader">{`Testing Center ${centersNumber}:`}</h4>
							<select defaultValue="select-test-Center">
								<option value="select-test-Center" disabled>
									Select Client
								</option>
								{testCenterClients.map((testCenters) => (
									<option key={testCenters.id} value={testCenters.id}>
										{testCenters.client}
									</option>
								))}
							</select>
							<FontAwesomeIcon
								icon={faClock}
								size="lg"
								style={{ position: 'relative', left: '10px', bottom: '.5px' }}
							/>
						</label>
					))}
				</div>
			)}
		</section>
	)
}

export default SelectClientType
