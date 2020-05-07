import BaseButton from '../../components/Admin/BaseButton';
import BaseHeader from '../../components/Admin/BaseHeader';
import BaseNav from '../../components/Admin/BaseNav';
import BaseInput from '../../components/Admin/BaseInput';
import BaseDropdown from '../../components/Admin/BaseDropdown';
import StatsCard from '../../components/Admin/StatsCard';
import BaseTable from '../../components/Admin/BaseTable';
import Card from '../../components/Admin/Card';

export default {
    install(Vue) {
        Vue.component(BaseButton.name, BaseButton);
        Vue.component(BaseHeader.name, BaseHeader);
        Vue.component(StatsCard.name, StatsCard);
        Vue.component(BaseNav.name, BaseNav);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(BaseTable.name, BaseTable);
        Vue.component(Card.name, Card);
    }
};