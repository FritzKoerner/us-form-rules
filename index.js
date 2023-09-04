const usFormRules = {
    zipRules: (v) => {
        let regex = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
        return regex.test(v) || this.$t('registration.ziperror');
    },
    required: (v) => !!v || this.$t('notice.empty'),
    requireChecked: (v) =>
        !!v ||
        'Bitte akzeptieren Sie diesen Punkt, um das Formular abzuschicken.',
    isNumber: (v) => {
        let x;
        if (isNaN(v)) {
            return 'Bitte nur ganze Zahlen.';
        }
        x = parseFloat(v);
        return (x | 0) === x || 'Bitte nur ganze Zahlen.';
    },
    pastDate: (v) =>
        Date.parse(this.formatD(v)) > Date.now() ||
        'Bitte wählen sie ein Datum in der Zukunft aus.',
    isPhoneNumber: (v) => {
        let regex = new RegExp(
            /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/im
        );
        return regex.test(v) || 'Bitte geben sie eine valide Telefonnummer ein';
    },
    isEmail: (v) => {
        const regex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return regex.test(v) || 'Bite geben sie eine valide Email an';
    },
};

export default usFormRules;
