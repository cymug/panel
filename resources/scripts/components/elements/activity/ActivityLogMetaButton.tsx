import React, { useState } from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Dialog } from '@/components/elements/dialog';
import { Button } from '@/components/elements/button/index';

export default ({ meta }: { meta: Record<string, unknown> }) => {
    const [ open, setOpen ] = useState(false);

    return (
        <div className={'self-center md:px-4'}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                hideCloseIcon
                title={'Metadata'}
            >
                <pre className={'bg-gray-900 rounded p-2 overflow-x-scroll font-mono text-sm leading-relaxed'}>
                    {JSON.stringify(meta, null, 2)}
                </pre>
                <Dialog.Buttons>
                    <Button.Text onClick={() => setOpen(false)}>Close</Button.Text>
                </Dialog.Buttons>
            </Dialog>
            <button
                className={'p-2 transition-colors duration-100 text-gray-400 group-hover:text-gray-300 group-hover:hover:text-gray-50'}
                onClick={() => setOpen(true)}
            >
                <ClipboardListIcon className={'w-5 h-5'}/>
            </button>
        </div>
    );
};