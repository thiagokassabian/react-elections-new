import Candidate from '../Candidate';
import './styles.scss';

const Election = ({ election, selectedCity: city, candidates }) => {
	const { name, votingPopulation, presence, absence } = city;

	return (
		<>
			<h2 className="display-5 text-center text-md-start">Eleição em {name}</h2>
			<ul className="list-unstyled d-flex flex-column gap-md-3 flex-md-row align-items-center justify-content-md-start">
				<li>
					<strong>Total de eleitores:</strong> {votingPopulation.toLocaleString('pt-BR')}
				</li>
				<li>
					<strong>Comparecimento:</strong> {presence.toLocaleString('pt-BR')}
				</li>
				<li>
					<strong>Abstenções:</strong> {absence.toLocaleString('pt-BR')}
				</li>
			</ul>
			<p className="text-center text-md-start">{election.length} candidatos</p>
			<div className="row">
				{election
					.sort((a, b) => b.votes - a.votes)
					.map((candidate, i) => (
						<div
							className="col-6 col-md-4 col-xl-3 d-flex align-items-stretch mb-3"
							key={candidate.candidateId}>
							<Candidate
								data={{
									...candidate,
									candidate: candidates.find(c => c.id === candidate.candidateId),
									percentage: ((candidate.votes * 100) / city.presence).toFixed(2),
									elected: i === 0 ? true : false,
								}}
							/>
						</div>
					))}
			</div>
		</>
	);
};

export default Election;
