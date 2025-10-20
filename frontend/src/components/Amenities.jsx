/* eslint-disable no-unused-vars */
import { GiPalmTree } from 'react-icons/gi';
import { FaRunning, FaWineGlassAlt, FaSwimmer, FaTheaterMasks } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';

const amenities = [
    { icon: GiPalmTree, label: 'Sun Deck' },
    { icon: FaRunning, label: 'Fitness Center' },
    { icon: FaWineGlassAlt, label: 'Wine Bar' },
    { icon: MdRestaurant, label: 'Restaurant' },
    { icon: FaSwimmer, label: 'Swimming Pool' },
    { icon: FaTheaterMasks, label: 'Entertainment' },
];

export default function AmenitiesCard() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold mb-4 text-center text-[#543417]">Amenities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                // eslint-disable-next-line no-unused-vars
                {amenities.map(({ icon: Icon, label }, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-4 hover:text-[#543417] transition duration-300"
                    >
                        <div className="bg-[#f5f5f5] p-3 rounded-full shadow-sm">
                            <Icon size={28} className="text-[#c9a074]" />
                        </div>
                        <span className="text-sm font-medium">{label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
