export default {
    methods: {
        confirm(title, question, callback) {
            this.$snotify.confirm(
                question, title,
                {
                    position: 'centerTop',
                    xbuttons: {
                        text: 'Yes', action: () => callback()
                    },
                    buttons: [
                        { text: this.$t('common.yes'), action: (toast) => { callback(); this.$snotify.remove(toast.id) } },
                        { text: this.$t('common.no'), action: (toast) => { console.log('Clicked: No'); this.$snotify.remove(toast.id); } },
                    ]
                }
            )
        },
        success(msg, timeout, bodyMaxLength) {
            this.$snotify.success(
                msg,
                this.$t('titles.success'),
                { timeout: timeout || 2000, bodyMaxLength: bodyMaxLength || 150 }
            );
        },
        warning(msg, timeout, bodyMaxLength) {
            this.$snotify.warning(
                msg,
                this.$t('titles.warning'),
                { timeout: timeout || 2000, bodyMaxLength: bodyMaxLength || 150 }
            );
        },
        error(e, msg, timeout, bodyMaxLength) {
            if (e) {
                if (e.name === 'NetworkError' || e.message == 'Network Error') {
                    this.$snotify.error(
                        this.$t('errors.disconnected'), this.$t('titles.error'),
                        { timeout: timeout || 20000, bodyMaxLength: bodyMaxLength || 150 }
                    );
                } else if (e.response && e.response.data) {
                    if (e.response.status === 404) {
                        this.$snotify.error(
                            this.$t('errors.notFound'), this.$t('titles.error'),
                            { timeout: timeout || 5000, bodyMaxLength: bodyMaxLength || 150 }
                        );
                        this.$router.push({name: 'home'});
                    } else {
                        this.$snotify.error(
                            e.response.data.message, this.$t('titles.error'),
                            { timeout: timeout || 5000, bodyMaxLength: bodyMaxLength || 150 }
                        );
                    }
                } else {
                    this.$snotify.error(
                        e.message, this.$t('titles.error'),
                        { timeout: timeout || 5000, bodyMaxLength: bodyMaxLength || 150 }
                    );
                }
            } else {
                this.$snotify.error(msg, this.$t('titles.error'),
                    { timeout: timeout || 5000, bodyMaxLength: bodyMaxLength || 150 });
            }
        }
    }
}